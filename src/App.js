import React, { Component } from "react"
import { Route } from "react-router-dom"

// Pages Components
import Home from "./components/Home"

// API

// ==================================================================
// App Component
class App extends Component {
   render() {
      return (
         <>
            <Route exact path="/" component={Home} />
         </>
      )
   }
}

export default App
