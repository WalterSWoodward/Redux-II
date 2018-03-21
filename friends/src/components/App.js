import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import { getChars } from '../actions';
import Friends from './Friends';

class App extends Component {
  componentDidMount() {
    this.props.getChars();
  }

  render() {
    return (
      <div className="App">
       {/* <CreateFriendForm />
       <UpdateFriendForm /> */}
       <Friends />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    chars: state.chars,
    error: state.errorMessage,
    lizFavMovie: state.lizFavMovie,
  };
};

export default connect(mapStateToProps, { getChars })(App);
