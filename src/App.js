import React, { Component } from 'react';
import './App.css';

import Dropdown from "./components/dropdown/index"
class App extends Component {
  handleCommand(command){
    alert(`你选择了${command}`)
  }
  render() {
    return (
      <div className="App">
        <Dropdown 
        onCommand={this.handleCommand.bind(this)}
        trigger="hover"
        // type="button" type="text" 文字还是按钮 待完成
        menu={(
        <Dropdown.Menu>
          <Dropdown.Item command="a">英语</Dropdown.Item>
          <Dropdown.Item command="b">汉语</Dropdown.Item>
          <Dropdown.Item command="c">日本语</Dropdown.Item>
          <Dropdown.Item command="d" disabled>德语</Dropdown.Item>
          <Dropdown.Item command="e">法语</Dropdown.Item>
        </Dropdown.Menu>
      )}>

        选择语言
        </Dropdown>
        <Dropdown 
        onCommand={this.handleCommand.bind(this)}
        trigger="hover"
        // type="button" type="text" 文字还是按钮 待完成
        menu={(
        <Dropdown.Menu>
          <Dropdown.Item command="a">英语</Dropdown.Item>
          <Dropdown.Item command="b">汉语</Dropdown.Item>
          <Dropdown.Item command="c">日本语</Dropdown.Item>
          <Dropdown.Item command="d">德语</Dropdown.Item>
          <Dropdown.Item command="e">法语</Dropdown.Item>
        </Dropdown.Menu>
      )}>

        选择语言
        </Dropdown>
      </div>
    );
  }
}

export default App;
