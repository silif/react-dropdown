import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ClickOutside from 'react-click-outside';
import PropTypes from 'prop-types';
import "./Dropdown.css"
class Dropdown extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          visible: false
        }
      }
    getChildContext(component){
        return {
          component: this
        };
      }
    
      componentDidMount() {
        this.initEvent();
      }
      componentWillUpdate(props, state) {
        if (state.visible !== this.state.visible) {
          this.refs.dropdown.onVisibleChange(state.visible);
    
          if (this.props.onVisibleChange) {
            this.props.onVisibleChange(state.visible);
          }
        }
      }
    handleClickOutside(){
        this.setState({
            visible: false
        })
    }
    handleMenuItemClick(command,instance){

        this.props.onCommand&&this.props.onCommand(command, instance);
    }
    show(){
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => this.setState({ visible: true }), 250);
    }
    
    hide(){
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.setState({ visible: false }), 150);
    }
    initEvent(){
        const triggerElm= ReactDOM.findDOMNode(this.refs.trigger);
        if(this.props.trigger==="hover"){
            triggerElm.addEventListener('mouseenter', this.show.bind(this));
            triggerElm.addEventListener('mouseleave', this.hide.bind(this));
      
            let dropdownElm= ReactDOM.findDOMNode(this.refs.dropdown);
      
            dropdownElm.addEventListener('mouseenter', this.show.bind(this));
            dropdownElm.addEventListener('mouseleave', this.hide.bind(this));
        }else if(this.props.trigger==="click"){
            triggerElm.addEventListener('click', this.handleClick.bind(this))
        }
        
    }
    handleClick(){
        this.setState({ visible: !this.state.visible })
    }
    render(){
        const {type, size, menu } = this.props;
        return (
            <div className="dropdown-wrap">
                <button className="dropdown" ref="trigger">
                    <span>{this.props.children}<i></i></span>
                </button>
                {
                    React.cloneElement(menu, {
                        ref: 'dropdown'
                    })
                }
            </div>
        )
    }
}
Dropdown.childContextTypes = {
    component: PropTypes.any
};

Dropdown.propTypes = {
    menu: PropTypes.node.isRequired,
    type: PropTypes.string,
    size: PropTypes.string,
    trigger: PropTypes.oneOf(['hover', 'click']),
    hideOnClick: PropTypes.bool,
    onClick: PropTypes.func,
    onCommand: PropTypes.func,
    onVisibleChange: PropTypes.func
  }
  
  Dropdown.defaultProps = {
    hideOnClick: true,
    trigger: 'hover',
  }
export default ClickOutside(Dropdown);