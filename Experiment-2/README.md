# Product Store – React & Bootstrap Practical

## Project Description
This project is a simple and meaningful Product Store web page developed using React and Bootstrap. The application allows users to view products, add them to a shopping cart, remove products from the cart and automatically calculate the total price. The main purpose of this project is to understand component based development, state management and responsive user interface design in React.

## Features
- Displays a list of products
- Allows users to add products to the cart
- Increases quantity when the same product is added again
- Allows users to remove products from the cart
- Calculates the total price automatically
- Provides a clean and modern user interface
- Fully responsive for mobile and desktop screens
- Footer is displayed at the bottom of the page

## Technologies Used
- React (functional components and hooks)
- Bootstrap 5
- JavaScript
- Vite

## Project Structure
- src/components  
  - Header.jsx  
  - ProductCard.jsx  
  - CartTable.jsx  
  - Footer.jsx  
- src/pages  
  - Store.jsx  
- App.jsx  
- main.jsx  
- index.css  

## Implementation Details
- The Store page manages the cart using the `useState` hook.
- Product information is displayed using reusable `ProductCard` components.
- When a product is added, the application checks whether the product already exists in the cart and updates the quantity accordingly.
- The `CartTable` component displays all cart items and shows the total price.
- Bootstrap is used for layout, cards, tables, spacing and responsiveness.
- Additional styling is added using `index.css` to improve the user interface.

## How to Run the Project
- Install dependencies using:
