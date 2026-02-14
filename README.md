# Vue Objects Viewer

A Vue.js application for browsing, sorting, filtering, and viewing a paginated list of objects fetched from an external API. Built as a coding challenge demonstrating proficiency with the Vue ecosystem.

## Tech Stack

- **Vue.js** with **Vuex** for state management
- **Vue Router** for navigation (list view + detail view)
- **Vuetify** for UI components
- **Docker** + **Docker Compose** for containerized development
- **ESLint** for code quality

## Features

- Fetches data from an external API on a set polling interval
- Paginated list view with server-style pagination
- Sorting and filtering on multiple fields
- Sort/filter preferences persist across page refresh (Vuex state persistence)
- Detail view for individual objects on a separate route
- Fully containerized — runs inside Docker

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```
