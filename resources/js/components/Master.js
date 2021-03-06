import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    HashRouter
  } from "react-router-dom";
  import CreateItem from './CreateItem';
class Master extends Component {
    render(){
        return (
            <Router>
                <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/add-item">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Features</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                
                <Switch>
                    <Route path='/add-item' component={CreateItem} />
                </Switch>
                </div>
            </Router>
        )
    }
}
export default Master;