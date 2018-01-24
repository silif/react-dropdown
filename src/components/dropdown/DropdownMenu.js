import React,{Component} from 'react';

export default class DropdownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopper: false
        }
    }
    onVisibleChange(visible) {
        this.setState({
            showPopper: visible
        })
    }
    render(){
        const {showPopper} = this.state
        return(
            <ul ref="popper" className={showPopper?"show dropdown-list":"hide"}>
                {this.props.children}
            </ul>
        )
    }
}