# Counter App (React)

A simple counter application built using React and useState.  
The app allows users to increment, decrement, and reset a count value.  
It also includes bonus features like preventing negative values and showing a message when the count reaches 10.

## 🚀 Features

- ➕ **Increment** the count
- ➖ **Decrement** the count (does not go below 0)
- 🔄 **Reset** the count back to 0
- 🎯 Shows **"Goal Reached!"** when the count becomes 10
- ⚛️ Built completely using **React + useState**

## 📁 Project Structure

src/
├── components/
│ └── DisplayCount.jsx
├── App.jsx
├── App.css
└── main.jsx


## 🧠 Concepts Used

- React Functional Components  
- `useState` hook  
- Event handling (`onClick`)  
- Conditional rendering (`count === 10 && ...`)  
- State validation (no negative values)

## 📦 How to Run the Project

1. Clone the repository  
2. Install dependencies  

npm install
3. Start the development server 

npm start
4. The app will run at:  
**http://localhost:5187/**

Count: 5

[ Increment ] [ Decrement ] [ Reset ]

Goal Reached! <-- when count hits 10


---



