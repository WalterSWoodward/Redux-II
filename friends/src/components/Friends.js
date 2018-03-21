import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../styles/App.css';
import { getChars } from '../actions';

class Friends extends Component {
  componentDidMount() {
    this.props.getChars();
  }

  render() {
    return (
      <div className="Friends">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.height}>
                          <b>{char.name}</b><br/>
                          {char.height}<br/>
                          {char.mass}
                     </li>;
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

export default connect(mapStateToProps, { getChars })(Friends);
