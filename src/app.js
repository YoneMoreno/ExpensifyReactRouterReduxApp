import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpensesDashboardPage = () => (
    <div>
        This is our new dashboard component ;=)!
    </div>
);

const routes = (
    <BrowserRouter>
        <Route path='/' component={ExpensesDashboardPage}/>
    </BrowserRouter>
);


ReactDOM.render(
    routes,
    document.getElementById('app'));