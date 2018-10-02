import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import routes from './routes';
import Home from './pages/Home/Home';
import NavBarComponent from './component/NavBarComponent'
import Authors from './pages/Authors'
import Post from './pages/Post';
import Author from './pages/Author'
import NewPostForm from './pages/NewPostForm';

import * as postActions from './redux/actions/postActions';
import * as authorsActions from './redux/actions/authorsActions';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends Component {
  constructor() {
    super();
    this.state = {
      navBar: true,
    };
  }

  /* 
    Used for redirecting user from localhost:port/ to localhost:port/home(routes variable)
  */
  componentDidMount() {
    if (this.props.location.pathname === '/') {
      this.props.history.replace(routes.home);
    }
    this.props.postActions.getAllPosts();
    this.props.authorsActions.getAllAuthors();
  }


  toggleNavbar = () => {
    this.setState({ "navBar": !this.state.navBar });
  }

  render() {
    return (
      <div className="App">
        <NavBarComponent toggleNavbar={this.toggleNavbar} navBar={this.state.navBar} />
        <Route path={routes.home}
          exact
          component={Home} />

        <Route path={routes.authors}
          exact
          component={Authors} />

        <Route path={routes.post}
          component={Post} />

        <Route path={routes.author}
          component={Author} />

        <Route path={routes.newPost}
          component={NewPostForm} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    postActions:bindActionCreators(postActions,dispatch),
    authorsActions:bindActionCreators(authorsActions,dispatch),
  };
}

//with router gives access to three variables history,location,match
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
