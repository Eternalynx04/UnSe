import * as vscode from 'vscode';

type UndoEntry = { uri: vscode.Uri; range: vscode.Range; text: string };
let undoStack: UndoEntry[] = [];

let lastSelection: vscode.Selection | null = null;
let lastTextBeforeEdit: string | null = null;

export function activate(context: vscode.ExtensionContext) {
  vscode.window.onDidChangeTextEditorSelection(event => {
    const editor = event.textEditor;
    if (!editor.selection.isEmpty) {
      lastSelection = editor.selection;
      lastTextBeforeEdit = editor.document.getText(lastSelection);
    }
  });

  context.subscriptions.push(
    vscode.workspace.onDidChangeTextDocument(event => {
      const editor = vscode.window.activeTextEditor;
      if (
        editor &&
        editor.document.uri.toString() === event.document.uri.toString() &&
        lastSelection &&
        lastTextBeforeEdit !== null
      ) {
        undoStack.push({
          uri: editor.document.uri,
          range: lastSelection,
          text: lastTextBeforeEdit,
        });
        // Reset
        lastSelection = null;
        lastTextBeforeEdit = null;
      }
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('unse.undo', async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      let entry: UndoEntry | undefined;
      while (undoStack.length) {
        const top = undoStack.pop()!;
        if (top.uri.toString() === editor.document.uri.toString()) {
          entry = top;
          break;
        }
      }

      if (!entry) {
        vscode.window.showInformationMessage('Nothing to undo in selection');
        return;
      }

      await editor.edit(editBuilder => {
        editBuilder.replace(entry!.range, entry!.text);
      });
    })
  );

  console.log('✅ UnSe fully initialized');
}

export function deactivate() {
  undoStack = [];
}
