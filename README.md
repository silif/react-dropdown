# react-dropdown
react-dropdown
```javascript
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
    // 事件可不用写
    trigger="click" // 触发方式只能是hover click 
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
