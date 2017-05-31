import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Info from './components/Info';
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render((
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/info" component={Info}/>
            </Switch>
        </App>
    </Router>

), document.getElementById('root'));
