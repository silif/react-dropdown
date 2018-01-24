import React, { Component } from 'react';
import './App.css';

import Dropdown from "./components/dropdown/index"

class App extends Component {
  handleCommand(command){
    alert(command)
  }
  render() {
    return (
      <div className="App">
        
        <Dropdown 
        onCommand={this.handleCommand.bind(this)}
        trigger="hover"
        menu={(
        <Dropdown.Menu>
          <Dropdown.Item command="a">英语</Dropdown.Item>
          <Dropdown.Item command="b">汉语</Dropdown.Item>
          <Dropdown.Item command="c">日本语</Dropdown.Item>
          <Dropdown.Item command="d" disabled>德语</Dropdown.Item>
          <Dropdown.Item command="e" divided>法语</Dropdown.Item>
        </Dropdown.Menu>
      )}>

        下拉菜单
        </Dropdown>
      </div>
    );
  }
}

export default App;
