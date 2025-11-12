
---

## ⚙️ 1. Vanilla JS Approach

### 📄 File: `vanilla/index.html`
- Uses **plain JavaScript** to:
  - Change the document title using `document.title`.
  - Count and display the number of DOM updates.
- Demonstrates **manual DOM manipulation**, where the browser updates the actual DOM tree every time.

### 🧠 Concept:
Every time you click the button:
- The JS code directly changes the DOM.
- The browser has to reflow and repaint the entire updated section.
- This can become inefficient with larger apps.

---

## ⚛️ 2. React (Virtual DOM) Approach

### 📄 File: `react-app/src/App.jsx`
- Uses **React and useState** to:
  - Manage the title and count as *states*.
  - Re-render the UI declaratively when states change.
- The **Virtual DOM** efficiently updates only the changed elements instead of the whole DOM tree.

### 🧠 Concept:
- You simply update the state (`setTitle`, `setCount`), and React handles the rest.
- React compares the old and new Virtual DOM and updates only the necessary parts of the Real DOM.
- This makes the UI updates faster and cleaner.

---

## 🧪 How to Run

### ▶️ Vanilla JS Version:
1. Open the `vanilla/index.html` file directly in your browser.
2. Click the **"Change Title"** button.
3. See how the DOM updates manually each time.

---

### ▶️ React Version:
1. Navigate to the `react-app/` folder.
2. Install dependencies:
   ```bash
   npm install

   
🧑‍💻 Author
Prashant Mishra
Student at Masai School
💼 Aspiring Full Stack Web Developer


