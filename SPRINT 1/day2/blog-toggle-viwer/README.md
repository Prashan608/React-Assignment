# Interactive Blog Toggle Viewer – React Assignment

This project is part of the Masai React Sprint and demonstrates how to build an interactive blog viewer using state management and conditional rendering in React.

The component displays a list of blog titles. When a user clicks on a title, the full content of that blog is shown below the list. This helps understand how to handle user interactions, state updates, conditional UI, and rendering lists with `map()`.

---

## 🚀 Features

- Displays a list of blog titles using `map()`
- Each title is clickable
- Clicking a title updates the selected blog using `useState`
- Shows the full content of the selected blog
- Displays a message when no blog is selected
- Clean and simple UI

---

## 📁 Project Structure

src/
├── components/
│ └── BlogContent.jsx
├── App.jsx
├── App.css
└── main.jsx


---

## 🧠 How It Works

### 1. **State Handling**
A `selectedBlog` state (here named `blog`) is used to store the blog the user clicks.

### 2. **Rendering Titles**
The blog titles are looped using:


Each title is displayed as a clickable element.

### 3. **Selecting a Blog**
When a title is clicked, the selected blog object is stored in state using:


### 4. **Conditional Rendering**
- If no blog is selected → show `"Select a blog to read"`
- If a blog is selected → show the title and full content

---

## 📄 Example Blog Data

The project uses a predefined array of blog objects like:


### 4. **Conditional Rendering**
- If no blog is selected → show `"Select a blog to read"`
- If a blog is selected → show the title and full content

---

## 📄 Example Blog Data

The project uses a predefined array of blog objects like:


### 4. **Conditional Rendering**
- If no blog is selected → show `"Select a blog to read"`
- If a blog is selected → show the title and full content

---

## 📄 Example Blog Data

The project uses a predefined array of blog objects like:

{
title: "Mastering JavaScript",
content: "JavaScript is one of the most versatile..."
}


---

## 🛠 Technologies Used

- React (Vite)
- JavaScript (ES6)
- CSS

---

## ▶️ Running the Project

1. Install dependencies:



---

## ✨ Learning Outcomes

By building this project, you will understand:

- How to map over arrays in JSX
- How to create interactive components
- How to use `useState` for storing selected data
- How conditional rendering works in React
- How to build dynamic UI based on state

---

## 🧑‍💻 Author

**Prashant Mishra**

