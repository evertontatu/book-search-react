import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BookInfo from './components/BookInfo';
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render((
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/teste" component={BookInfo}/>
                <Route path="/:book.id" component={BookInfo}/>
            </Switch>
        </App>
    </Router>

), document.getElementById('root'));
