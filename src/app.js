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
const AddExpensePage = () => (
    <div>
        This is our new add expenses ! component.
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path='/' component={ExpensesDashboardPage} exact={true}/>
            <Route path='/create' component={AddExpensePage}/>
        </div>
    </BrowserRouter>
);


ReactDOM.render(
    routes,
    document.getElementById('app'));