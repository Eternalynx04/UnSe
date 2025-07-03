# UnSe – Precise Undo in Selection for VS Code

**UnSe** is a Visual Studio Code extension that brings scoped undo functionality — changes are undone only within the currently selected text, offering a safer and more precise editing workflow.

No more accidentally undoing unrelated code!

---

### ✨ Key Capabilities

✔️ Undo changes strictly within the selected region
✔️ Automatically tracks edits when your selection changes
✔️ Leaves the rest of your document untouched
✔️ Trigger via Command Palette or `Ctrl + Alt + Z` (default)

---

### 📦 How to Use

1. Select any portion of text in your editor
2. Edit anything within the selected range
3. Undo only those edits using:

   * Command Palette → `Undo in Selection`
   * or shortcut: `Ctrl + Alt + Z`

---

### 🔧 Setup Locally

```bash
git clone https://github.com/Eternalynx04/UnSe.git
cd UnSe
npm install
npm run compile
```

Then open VS Code in this directory and press `F5`.

---

### 🛠 Development Mode

Run in watch mode for live rebuilds:

```bash
npm run watch
```

---

### 📚 Commands

| Command     | Action                                   | Shortcut         |
| ----------- | ---------------------------------------- | ---------------- |
| `unse.undo` | Undo the most recent change in selection | `Ctrl + Alt + Z` |

---

### 🙌 Author & License

Made with ❤️ by Sumit 
Licensed under the MIT License.
