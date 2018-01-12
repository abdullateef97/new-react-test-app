import React, { Component } from 'react';
const jsonData = require('../data/data');
import AppList from './appList'

export default class App extends Component {
  constructor(props){
    super(props);
    this.setState({data : {}})
  }

  componentWillMount(){
    this.setState({data : jsonData.results})
  }
  render() {
    let {data} = this.state;
    return (
      <div>
      <div>React simple starter</div>
      <AppList data={data}/>
      </div>
    );
  }
}
