# Hide CF Problem Tags

A lightweight Chrome/Opera browser extension that automatically hides the **Problem tags** sidebar on Codeforces problem pages and injects an inline toggle button so you can show or hide tags on demand.

---

## 🚀 Why It’s Useful

* **Minimize Distractions**: Tags can bias your problem-solving approach or clutter the UI. Hiding them helps you focus on the statement itself.
* **Avoid Tag Bias**: Sometimes you want to solve a problem without knowing its category. This extension lets you remove that hint.
* **Quick Control**: An inline **Show Tags** / **Hide Tags** button appears next to the header—no need to dive into extension popups.

---

## 🛠️ Installation & Setup

1. **Clone or Download** this repository:

   ```bash
   git clone https://github.com/<your-username>/hide-cf-tags.git
   ```
2. **Open your browser’s Extensions page**:

   * **Chrome**: `chrome://extensions`
   * **Opera GX**: `opera://extensions`
3. **Enable Developer mode** (toggle in the top-right).
4. **Load the unpacked extension**:

   * Click **Load unpacked**.
   * Select the folder where you cloned this repo (`hide-cf-tags/`).
5. **Verify**: You should see **Hide CF Problem Tags** in your list of extensions.

---

## ✅ Usage

* Navigate to any Codeforces problem page (e.g. `https://codeforces.com/problemset/problem/1234/A`).
* By default, the **Problem tags** section is hidden.
* Click the **Show Tags** button next to the “Problem tags” header to reveal them, or **Hide Tags** to conceal again.
* Your preference is saved across page loads and browser restarts.

---

## 📁 Repository Structure

```
hide-cf-tags/
├── manifest.json      # Extension manifest (MV3)
├── content.js         # Content script for hiding tags & injecting toggle
└── README.md          # This file
```

---

## 🤝 Contributing

Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss what you’d like to change.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
