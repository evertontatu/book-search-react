import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BookInfo from './components/BookInfo';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>  
            <Route path="/:bookId" component={BookInfo}/>
        </Switch>
    </Router>

), document.getElementById('root'));
