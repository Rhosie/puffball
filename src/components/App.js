import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/about" component={About} />
                <Route path="*" component={Home} />
            </Switch>
        </Router>
    )
}

export default App
