
<div align="center">
    <h1> Market </h1>
    An E-Commerce with react-redux to demonstrate and understand<br/> the working of redux and its architecture.<br/><br/>
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>

<div><br/>
<div align="left">

# Redux
Redux is an open-source JavaScript library used to manage application state. React uses Redux for building the user interface. It was first introduced by Dan Abramov and Andrew Clark in 2015.

React Redux is the official React binding for Redux. It allows React components to read data from a Redux Store, and dispatch Actions to the Store to update data. Redux helps apps to scale by providing a sensible way to manage state through a unidirectional data flow model. React Redux is conceptually simple. It subscribes to the Redux store, checks to see if the data which your component wants have changed, and re-renders your component.

**Redux was inspired by Flux. Redux studied the Flux architecture and omitted unnecessary complexity.**

Redux has become the popular state management solution for most applications using React, Vue, or Angular as front-end frameworks. One of the main reasons for the popularity of Redux is its lightweight size,Redux works on the simple principle of storing the entire state of the application is a single central store. This store can be accessed by all components and as such, removes the need to pass parameters and properties between components. The main building blocks of Redux are its actions, reducers, and store.

# Thinking in Redux 
Redux can be described in three fundamental principles:

1. **Single source of truth​** - The global state of your application is stored in an object tree within a single store.
2. **State is read-only**​ - The only way to change the state is to emit an action, an object describing what happened.
3. **Changes are made with pure functions**​ - To specify how the state tree is transformed by actions, you write pure reducers.



# Redux Application Data Flow
State describes the condition of the app at a specific point in time
The UI is rendered based on that state
When something happens (such as a user clicking a button), the state is updated based on what occurred
The UI re-renders based on the new state.

<img src="https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif">

# React Redux
React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state.

## Difference between component and container in react redux
**Components** let you split the UI into independent, reusable pieces, and think about each piece in isolation. They are sometimes called "presentational components" and the main concern is how things look

**Containers** are just like components without UI and Containers are concerned with how things work. It mainly talks to the redux store for getting and updating the data

# References
- A Beginners Guide to Understanding Redux - https://medium.com/zenofai/beginners-guide-to-understand-redux-6a5e93ce3f64
- React Redux- https://react-redux.js.org/
- React + Redux — Best Practices - https://medium.com/js-imaginea/best-practices-with-react-and-redux-application-1e94a6f214a0
- React + Redux: Architecture Overview - https://medium.com/mofed/react-redux-architecture-overview-7b3e52004b6e
- 5 Alternatives to React Redux in 2020 - https://blog.bitsrc.io/redux-react-alternatives-c1733793a339
