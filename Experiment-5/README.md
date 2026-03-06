# Experiment 5 — Redux Toolkit Integration (React)

📌 Project Overview
This project is an extension of Experiment 4.
The existing multi-page React application was enhanced by replacing useReducer with Redux Toolkit, while keeping useContext for global state and useMemo for performance optimization. A new page was also added and connected using React Router.

The application represents a Tech Mart (Product Store) where users can browse products, add items to a cart, manage quantities, and view cart summaries.

🚀 Features Implemented

1️⃣ React Router
Routing from previous experiments was maintained and extended.

 Pages Included

* Store (Home) – Displays available products.
* About – Information about the project.
* Contact – Contact form page.
* Tasks – Page from Experiment 4 demonstrating Context + useMemo.
* Cart (New Page – Experiment 5) – Displays items added using Redux state.

# Example Routes
```jsx
<Route path="/" element={<Store />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/tasks" element={<Tasks />} />
<Route path="/cart" element={<Cart />} />
```

2️⃣ Redux Toolkit (State Management)
Redux Toolkit was implemented to manage application state in a structured and scalable way.

# Redux Store
File:
src/redux/store.js

Configured using:

```js
configureStore()
```
# Redux Slice
File:
src/redux/slices/cartSlice.js

Implemented using:

```js
createSlice()
```

#Actions Implemented

The cart slice includes three reducers:
* addItem → Adds a product to the cart
* removeItem → Removes a product from the cart
* updateQty → Updates quantity of an item

Example reducer logic:

```js
addItem: (state, action) => {
  const existing = state.items.find(item => item.id === action.payload.id);

  if (existing) {
    existing.qty += 1;
  } else {
    state.items.push({ ...action.payload, qty: 1 });
  }
}
```
# 3️⃣ Redux Integration in UI
Redux state is accessed and modified using React Redux hooks.

# useDispatch
Used to trigger Redux actions.

Example:

```js
dispatch(addItem(product))
```

Used in:
* Store Page
* ProductCard component

### useSelector
Used to read Redux state.

Example:

```js
const cartItems = useSelector(state => state.cart.items)
```

Used in:
* Store Page
* Cart Page


# 4️⃣ useMemo (Performance Optimization)
`useMemo` was used to optimize derived calculations.

Example:

```js
const totalPrice = useMemo(() => {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}, [items]);
```
This prevents unnecessary recalculations when cart data has not changed.

# 5️⃣ useContext (Global State)
Context API from Experiment 4 was retained.

File:
src/context/AppContext.jsx

The Context provider wraps the application and manages global state such as:
* Theme settings
* Shared application preferences

Used in multiple components including:
* Tasks page
* Navbar

# 6️⃣ New Page Added (Experiment 5)

# Cart Page
File:
src/pages/Cart.jsx

Features:
* Displays items added to cart
* Allows removing items
* Shows total cart price
* Uses Redux state and useMemo

# 7️⃣ UI Improvements
The user interface was enhanced to improve usability:
* Button color changes when item is added
* “Add to Cart” changes to “Add More +”
* Quantity indicator shows how many items are already added
* Responsive Bootstrap card layout
* Clean and consistent design across pages

# 📁 Project Structure

src
│
├── components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   └── CartTable.jsx
│
├── context
│   └── AppContext.jsx
│
├── redux
│   ├── store.js
│   └── slices
│       └── cartSlice.js
│
├── pages
│   ├── Store.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Tasks.jsx
│   └── Cart.jsx
│
├── App.jsx
├── main.jsx
└── App.css

# 📸 Screenshots
Screenshots are available inside the `/screenshots` folder.

# 🎯 Learning Outcomes
Through this experiment the following concepts were learned:

* Using Redux Toolkit for scalable state management
* Creating Redux store and slices
* Using useDispatch and useSelector
* Optimizing computations using useMemo
* Managing global state using Context API
* Building and extending a multi-page React application
