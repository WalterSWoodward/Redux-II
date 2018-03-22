import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../styles/App.css';
import { getChars, deleteFriend } from '../actions';

class Friends extends Component {
  componentDidMount() {
    this.props.getChars();
  }

  handleDelete(friend) {
    console.log('FRIENDDDDDDDDD', friend)
    this.props.deleteFriend(friend);
    this.props.getChars();
  }

  render() {
    return (
      <div className="Friends">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(friend => {
              return <li onClick={this.handleDelete(friend.id)} key={friend.name}>{friend.name}</li>
            })}
          </ul>
        )}
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

export default connect(mapStateToProps, { 
          getChars,
          deleteFriend,
        })(Friends);
