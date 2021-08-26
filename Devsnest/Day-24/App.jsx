import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Profile from './Component/Profile';
import Dashboard from './Component/Dashboard';
import Error from './Component/Error';
import Navbar from './Navbar';
const App = () => {
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route component={Error}/>
            </Switch>
        </>
    )
}

export default App;
