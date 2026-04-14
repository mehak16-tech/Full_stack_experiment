 Experiment 4 — React Advanced State Management (Tech Mart)

📌 Project Overview

This project is an extension of **Experiment 3** and enhances the existing multi-page React application by implementing advanced React concepts including:

* Context API (global state management)
* useReducer (structured state updates)
* useMemo (performance optimization)
* Additional page integrated with React Router

The application represents a modern **Tech Mart (Product Store)** where users can browse products, manage a cart, and interact with a task management system.

## 🚀 Features Implemented

### ✅ React Router

* Multi-page navigation maintained from Experiment 3
* Pages included:

  * Store
  * About
  * Contact
  * Tasks (New Page — Experiment 4)

### ✅ useContext (Global State Management)

A global context provider was created to manage shared application state.

**Location:**

src/context/AppContext.jsx

The context is used in multiple components including:

* Tasks Page
* Navbar

This allows components to access shared state without prop drilling.

### ✅ useReducer (State Management)

A reducer was implemented to handle structured task state updates.

**Location:**

src/reducer/taskReducer.js

Actions implemented:

* ADD_TASK
* TOGGLE_TASK
* DELETE_TASK

The reducer improves maintainability compared to multiple useState calls.

### ✅ useMemo (Performance Optimization)

useMemo was used to compute derived values efficiently.

Example:

* Completed tasks count
* Task statistics

This prevents unnecessary recalculations when state updates.


### ✅ New Page Added — Tasks Page

A new page was created to demonstrate:

* Global state access using Context
* Reducer-based state updates
* Memoized calculations

Users can:

* Add tasks
* Mark tasks as complete
* Delete tasks
* View task statistics

## 🎨 UI Enhancements

The user interface was redesigned compared to Experiment 3:

* Dark modern theme with gradient accents
* Improved product cards with hover effects
* Responsive layout for mobile and desktop
* Styled cart and task management components

## 📂 Project Structure

src/
  components/
    Navbar.jsx
    Footer.jsx
    ProductCard.jsx
    CartTable.jsx

  context/
    AppContext.jsx

  reducer/
    taskReducer.js

  pages/
    Store.jsx
    About.jsx
    Contact.jsx
    Tasks.jsx

  App.jsx
  App.css
  main.jsx

## 🌐 Deployment

Deployment was done using Vercel.

## 🎯 Learning Outcomes

Through this experiment, the following concepts were understood:
* Managing global state using Context API
* Handling complex state logic using useReducer
* Optimizing performance with useMemo
* Extending a multi-page React application while maintaining UI consistency
