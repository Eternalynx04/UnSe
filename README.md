# UnSe – Undo in Selection

UnSe is a lightweight Visual Studio Code extension that enables undo functionality only within the current selection. Ideal for developers who want more granular control over edits without rolling back unrelated changes.

## ✨ Features

- ⏪ Undo only the last change within the currently selected range
- 🔒 Avoid unintended undos outside your working scope
- 🧠 Automatically tracks and stores edits when selection changes
- 🎯 Trigger via Command Palette or `Ctrl + Alt + Z` (customizable)

## 🚀 Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/Eternalynx04/UnSe.git
cd UnSe
npm install
```

### 2. Build the Extension

```bash
npm run compile
```

### 3. Launch in VS Code

```bash
code .
```

Then press `F5` to open a new Extension Development Host with UnSe enabled.

## 🛠 Usage

1. Select any text in the editor
2. Make changes within that selection
3. Undo only within the selected range by:
   - Opening Command Palette → "Undo in Selection"
   - Or using the default keybinding: `Ctrl + Alt + Z`

## 💡 Extension Commands

| Command | Description | Default Keybinding |
|---------|-------------|-------------------|
| `unse.undo` | Undo the last change in selection | `Ctrl + Alt + Z` |

## 🧪 Development

```bash
npm run watch  # to auto-rebuild on changes
```

## 🤝 Contributing

Pull requests are welcome! Feel free to fork this repository and submit improvements or features.

## 📝 License

This project is licensed under the MIT License.

---
