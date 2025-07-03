import * as assert from 'assert';
import * as vscode from 'vscode';

suite('UnSe Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('unse.undo command is registered', async () => {
    const allCommands = await vscode.commands.getCommands(true);
    const isRegistered = allCommands.includes('unse.undo');
    assert.strictEqual(isRegistered, true, `'unse.undo' should be registered`);
  });
});
