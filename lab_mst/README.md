# React Routing Example – Food Recipe Website

## Project Overview

This project demonstrates **React Router navigation** in a React application.
The website contains multiple pages such as **Home**, **About**, and **Recipes**, and allows navigation between them without refreshing the page.

The project also includes improvements like **custom CSS styling** and a **404 Not Found page** for invalid routes.

## Technologies Used

* React
* React Router DOM
* JavaScript
* CSS
* Vite


## Folder Structure

src
 ├── pages
 │   ├── Home.jsx
 │   ├── About.jsx
 │   ├── Recipes.jsx
 │   └── NotFound.jsx
 │
 ├── App.jsx
 ├── App.css
 └── main.jsx

## Features

* Navigation between pages using **React Router**
* **Single Page Application (SPA)** behavior (no page reload)
* **Navigation links** using the `Link` component
* Multiple routes using `Routes` and `Route`
* Custom CSS styling for UI
* **404 Not Found page** for invalid URLs

## React Router Concepts Used

### BrowserRouter

Wraps the entire application and enables routing functionality.

### Routes

Acts as a container for defining different routes in the application.

### Route

Maps a specific URL path to a React component.

Example:

```
/ → Home Page
/about → About Page
/recipes → Recipes Page
```

### Link

Used for navigation between pages without reloading the page.

Example:

```jsx
<Link to="/about">About</Link>
```

## Functionalities

* Navigate between pages using links
* Display different components based on the URL
* Maintain **Single Page Application behavior**
* Show a **404 page** for invalid routes



## Possible Improvements

* Add **lazy loading for routes**
* Implement **protected routes for authentication**
* Add **recipe images and detailed recipe pages**
* Connect to a **backend API for dynamic recipes**
