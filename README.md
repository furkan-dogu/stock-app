# Stock App

<div align="center">
  <img src="./src/assets/stock-app.gif" />
</div>

## About the Project

This project, developed with React, is a single-page online web application. It allows you to manage and receive orders. Additionally, it includes an inventory system with the ability to add, edit, delete, and view products, companies, brands, sales, and purchases.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Project Skeleton](#project-skeleton)
- [Screenshots](#screenshots)

## Live Demo

[Stock App](https://stock-app-theta-ten.vercel.app/stock/)

## Features

- Login and register operations
- Pagination for smooth transitions between pages.
- Dashboard section where purchases and sales sections are tabulated
- Purchases, sales, firms, brands and product sections that you can add, delete and update yourself

## Technologies Used

- React
- Redux
- Redux-Toolkit
- Axios for API requests
- React-Router-Dom
- Styling with [Material UI](https://mui.com/)
- [React-Toastify](https://fkhadra.github.io/react-toastify/introduction/) for alert 
- [Redux-Persist](https://www.npmjs.com/package/redux-persist) for status data retention.
- [Tremor](https://www.tremor.so/) for charts
- [Formik](https://formik.org/) for form management 
- [Yup](https://www.npmjs.com/package/yup) for form validation processes

## Usage

- Create your registration from the Register section and log in from the login section
- Pagination for smooth transitions between pages.
- Create your own stock
- Add, delete and update purchases, sales, firms, brands and product sections

## Project Skeleton

```
Stock App (folder)
|
|----readme.md         
SOLUTION
├── public
│    └── index.html
├── src
│    ├── assets
│    │     └── images
│    ├── components
│    │     ├── BrandCard.jsx
│    │     ├── BrandModal.jsx
│    │     ├── Charts.jsx
│    │     ├── DataFetchMsg.jsx    
│    │     ├── FirmCard.jsx    
│    │     ├── FirmModal.jsx    
│    │     ├── KPI.jsx    
│    │     ├── MenuListItems.jsx    
│    │     ├── ProductModal.jsx    
│    │     ├── ProductTable.jsx    
│    │     ├── PurchasesModal.jsx    
│    │     ├── PurchasesTable.jsx    
│    │     ├── SalesModal.jsx    
│    │     └── SalesTable.jsx  
│    ├── features
│    │     ├── authSlice.js
│    │     └── stockSlice.js 
│    ├── helpers
│    │     ├── MenuIcons.js
│    │     └── ToastNotify.js
│    ├── pages
│    │     ├── Brands.jsx
│    │     ├── Dashboard.jsx
│    │     ├── Firms.jsx
│    │     ├── Home.jsx
│    │     ├── Login.jsx
│    │     ├── Products.jsx
│    │     ├── Purchases.jsx    
│    │     ├── Register.jsx    
│    │     └── Sales.jsx 
│    ├── router
│    │     ├── AppRouter.jsx
│    │     └── PrivateRouter.jsx
│    ├── service
│    │     ├── UseAuthCalls.jsx
│    │     ├── UseAxios.jsx
│    │     └── UseStockCalls.jsx
│    ├── styles
│    │     ├── globalStyles.js
│    │     └── menuListStyle.js
│    ├── App.js
│    ├── index.css
│    └── index.js
├── package.json
└── yarn.lock
```

## Screenshots

<div align="center">
  <img src="./src/assets/Screenshot_1.jpg"  width="35%" height="500" />
  <img src="./src/assets/Screenshot_2.jpg"  width="55%" height="600" />
  <img src="./src/assets/Screenshot_3.jpg"  width="90.5%" height="450" />
</div>

## Compatibility

The project is compatible with both wide-screen computers and mobile devices.
