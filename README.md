# UnSe – Undo in Selection

UnSe is a Visual Studio Code extension that provides precise undo functionality within selected text ranges. It allows developers to undo changes only within their current selection, preventing accidental rollbacks of unrelated code modifications.

## ✨ Features

UnSe tracks edits automatically when your selection changes and stores the history for each selected range. When you need to undo changes, it only affects the text within your current selection, leaving other parts of your code untouched.

* ⏪ Undo functionality limited to the currently selected text range
* 🔒 Automatic edit tracking when selection boundaries change
* 🧠 Prevents unintended undos outside your working area
* 🎯 Simple command palette integration with customizable keybinding

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/Eternalynx04/UnSe.git
cd UnSe
```

2. Install dependencies:

```bash
npm install
```

3. Build the extension:

```bash
npm run compile
```

4. Open in VS Code and press `F5` to launch the Extension Development Host.

## 🛠 Usage

1. Select any text in your editor
2. Make changes within that selected range
3. Use one of these methods to undo within the selection:

   * Open Command Palette and search for **"Undo in Selection"**
   * Use the default keybinding: `Ctrl + Alt + Z`

## 💡 Commands

| Command     | Description                               | Default Keybinding |
| ----------- | ----------------------------------------- | ------------------ |
| `unse.undo` | Undo the last change within the selection | `Ctrl + Alt + Z`   |

## 🧪 Development

To work on the extension:

```bash
npm run watch
```

This will automatically rebuild the extension when you make changes to the source code.

## 🤝 Contributing

Contributions are welcome. Please fork the repository and submit pull requests for any improvements or bug fixes.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---
