# Product Store – React Router Extension (Experiment 3)

## Project Description
This project is an extension of the Product Store application created in Experiment 2.  
In this experiment, React Router is used to convert the single-page application into a
multi-page React application with proper navigation.

The application now contains multiple related pages that follow the same design and theme.

---

## Objective
- To understand and use React Router in a React application  
- To create multiple pages and navigate between them  
- To extend the existing Product Store project with additional content and structure  

---

## Pages in the Application
- Store Page – Displays products, cart and total price
- About Page – Provides information about the Product Store project
- Contact Page – Allows users to send queries or feedback

---

## Features
- Product listing and cart management
- Automatic quantity handling for repeated products
- Total price calculation
- Navigation between pages using React Router
- Consistent navigation bar and footer across all pages
- Clean and responsive UI using Bootstrap
- Footer placed at the bottom of all pages

---

## Technologies Used
- React (Functional Components and Hooks)
- React Router DOM
- Bootstrap 5
- JavaScript
- Vite

---

## Project Structure

src  
├── components  
│   ├── Navbar.jsx  
│   ├── ProductCard.jsx  
│   ├── CartTable.jsx  
│   └── Footer.jsx  
├── pages  
│   ├── Store.jsx  
│   ├── About.jsx  
│   └── Contact.jsx  
├── App.jsx  
├── main.jsx  
└── index.css  

---

## Implementation Details

- React Router is configured in App.jsx using BrowserRouter, Routes and Route.
- The Navbar component uses NavLink to navigate between Store, About and Contact pages.
- The Store page manages the shopping cart using the useState hook.
- The ProductCard component displays product information.
- The CartTable component shows cart items and the total price.
- The About page explains the purpose and features of the project.
- The Contact page provides a simple form for user communication.
- Bootstrap is used for layout, components and responsiveness.
- Common layout (Navbar and Footer) is shared across all pages.

---

## How to Run the Project

1. Install dependencies

npm install

2. Start the development server

npm run dev

---

## Conclusion
This experiment extends the Product Store application by introducing React Router
and multiple related pages. It demonstrates page navigation, reusable components,
consistent UI design and structured application development using React and Bootstrap.
