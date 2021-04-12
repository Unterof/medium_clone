import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {CurrentUserProvider} from 'contexts/currentUser';
import CurrentUserChecker from 'components/currentUserChecker'
import Header from 'components/Header.jsx';
import Routes from 'routes';

const App = () => {
    return (
        <CurrentUserProvider>
            <CurrentUserChecker>
            <Router>
                <Header/>
                <Routes/>
            </Router>
            </CurrentUserChecker>
        </CurrentUserProvider>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'))
