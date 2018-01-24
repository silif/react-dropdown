import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class DropdownItem extends Component{
    handleClick(){
        this.context.component.handleMenuItemClick(this.props.command, this)
    }
    render() {
        const {disabled, divided } = this.props;
        let className = disabled?"dropdown-item disabled":"dropdown-item"
        return (
            <li 
                className={className}
                onClick={this.handleClick.bind(this)}
            >
                { this.props.children }
            </li>    
        )
    }
}

DropdownItem.contextTypes = {
    component: PropTypes.any
  };