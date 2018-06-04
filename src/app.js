import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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

const EditExpensePage = () => (
    <div>
        <h1>This is the Edit Expenses page, enjoy!</h1>
    </div>
);
const HelpPage = () => (
    <div>
        <h1>Help Page on duty!</h1>
    </div>
);
const NotFoundPage = () => (
    <div>
        <h1>404!</h1>
    </div>
);


const routes = (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={ExpensesDashboardPage} exact={true}/>
            <Route path='/create' component={AddExpensePage}/>
            <Route path='/edit' component={EditExpensePage}/>
            <Route path='/help' component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
);


ReactDOM.render(
    routes,
    document.getElementById('app'));