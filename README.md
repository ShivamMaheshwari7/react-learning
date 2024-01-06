# React Learning ...

# Parcel

- Dev Build
- Local Server
- HMR (Hot Module Replacement)
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Namaste Food

/\*\*

- Header
-        - Logo
-       - Nav Items
- Body
-       - Search
-       - RestaurantContainer
-           - RestaurantCard
- Footer
-       - Copyrights
-       - Links
-       - Address
-       - Contact
  \*/

Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks

(Normal JS Utility functions)

- useState() -> Superpowerful State Variables in React
- useEffect()

# 2 types of Routing in web apps

- Client Side Routing
- Server Side Routing

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

# Types of testing (developer)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up Testing in our app

- Installed React Testing Library
- Installed Jest
- Installed Babel Dependencies
- Configure Babel
- Configure Parcel config file to disable default babel transpilation
- Jest Configuration (npx jest --init)
- Installed Jsdom Library
- Installed @babel/preset-react (to enable JSX in test file, to make JSX work in test cases)
- Include @babel/preset-react inside my babel.config.js
- Installed @testing-library/jest-dom (npm i -D @testing-library/jest-dom)
