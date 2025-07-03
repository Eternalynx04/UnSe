# UnSe Extension

This Visual Studio Code extension implements selective undo functionality for text editors. UnSe allows users to undo modifications within specific text selections without affecting other parts of the document.

## How It Works

The extension monitors text selections and maintains separate edit histories for different ranges. When a user selects text and makes changes, UnSe creates a snapshot of that specific area. The undo operation then restores only the selected region to its previous state.

This approach solves the common problem where developers want to revert recent changes in one part of their code without losing modifications made elsewhere in the file.

## Getting Started

Download the source code from the repository and install the required dependencies using npm. After building the extension, you can test it by opening VS Code and pressing F5 to launch a new window with the extension loaded.

```bash
git clone https://github.com/Eternalynx04/UnSe.git
cd UnSe
npm install
npm run compile
```

## Using the Extension

Select text in your editor, make modifications, then activate the undo command to revert only the selected area. The extension provides a command called "Undo in Selection" accessible through the Command Palette, with a default keyboard shortcut of Ctrl+Alt+Z.

The extension registers the following command:
- `unse.undo` - Reverts the last change within the current selection (Ctrl+Alt+Z)

## Development Notes

Run `npm run watch` to enable automatic compilation during development. The extension source code follows standard VS Code extension patterns and can be modified to adjust the undo behavior or add additional features.
