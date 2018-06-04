import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

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
        This is the Edit Expenses page, enjoy!
    </div>
);
const HelpPage = () => (
    <div>
        Help Page on duty!
    </div>
);
const NotFoundPage = () => (
    <div>
        404!
        <Link to='/'>Go home</Link>
    </div>
);
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName='is-active' exact={true}>Index </NavLink>
        <NavLink to='/create' activeClassName='is-active'>Create Expense </NavLink>
        <NavLink to='/edit' activeClassName='is-active'>Edit Expense </NavLink>
        <NavLink to='/help' activeClassName='is-active'>Get Help </NavLink>
    </header>
);

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={ExpensesDashboardPage} exact={true}/>
                <Route path='/create' component={AddExpensePage}/>
                <Route path='/edit' component={EditExpensePage}/>
                <Route path='/help' component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;