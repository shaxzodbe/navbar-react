import React from 'react';
import './App.css'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Reports from "./pages/Reports";
import Team from "./pages/Team";
import Messages from "./pages/Messages";
import Supports from "./pages/Supports";

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/reports" component={Reports} />
                    <Route path="/products" component={Product} />
                    <Route path="/team" component={Team} />
                    <Route path="/messages" component={Messages} />
                    <Route path="/supports" component={Supports} />
                </Switch>
            </Router>
        </>
    );
};

export default App;