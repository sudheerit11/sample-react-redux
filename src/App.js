import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import './App.css';

import { simpleAction } from './actions/SimpleAction'
import Button from '@material-ui/core/Button';

class App extends Component {
  
  simpleAction = (event) => {
    /* */
    this.props.simpleAction("name");
  }
  findme = () =>{
    console.log('res', this.props.result);

    return this.props.result.map((name) => {
      return (<li key={name}>name</li>)
    });
  }

 render() {
  return (
   <div className="App" id="root">
    <header className="App-header">
     <h1 className="App-title">RADAR</h1>
    </header>
    <ul>
      {this.findme()}
    </ul>
    <p className="App-intro">
      SampleApp
    </p>
    <button onClick={this.simpleAction}>Test redux action</button>

   </div>
  );
 }
}

const mapStateToProps = (state) => {
  return {
    result: state.simpleReducer.result
  };
};

const mapDispatchToProps = (dispatch) => {
  // simpleAction: () => dispatch(simpleAction())
  return bindActionCreators({simpleAction: simpleAction}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);