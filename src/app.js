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


const routes = (
    <BrowserRouter>
        <div>
            <Route path='/' component={ExpensesDashboardPage} exact={true}/>
            <Route path='/create' component={AddExpensePage}/>
            <Route path='/EditExpensePage' component={EditExpensePage}/>
            <Route path='/HelpPage' component={HelpPage}/>
        </div>
    </BrowserRouter>
);


ReactDOM.render(
    routes,
    document.getElementById('app'));