import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
import Notfound from "./component/notfound";
import Dictionary from "./component/dictionary";
import Progress from "./component/progress";
import Vocabulary from "./component/vocabulary";
import Article from "./component/article";
import Articles from "./component/articles";
import Resources from "./component/resources";
import ResourceDetail from "./component/resourcedetail";
import Login from "./component/auth/login";
import ResetPassword from "./component/auth/resetpassword";
import Signup from "./component/auth/signup";
import Profile from "./component/profile";
import About from "./component/about";
import store from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/dictionary/:word" component={Dictionary} />
            <Route exact path="/progress" component={Progress} />
            <Route exact path="/vocabulary" component={Vocabulary} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/article/:id" component={Article} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/resourcedetail" component={ResourceDetail} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/resetpassword" component={ResetPassword} />
            <Route exact path="/about" component={About} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
