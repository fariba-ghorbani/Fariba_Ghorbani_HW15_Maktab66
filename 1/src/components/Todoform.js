import React, { Component } from 'react';
import {BsPlusLg} from 'react-icons/bs'
import { v4 as uuid } from 'uuid';

class Todoform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    formSubmit(e) {
        e.preventDefault();
        if (this.state.value !=="") {
            let temp = this.state.value;
            this.setState({value: ""}, () => {
                this.props.transferData({"id":uuid(), "task": temp, "read":true})
            })
        }
    }


    render() { 
        return (
            <form onSubmit={(e) => this.formSubmit(e)} className="add-todo--form">
                <input 
                className="add-todo__input" 
                type="text" name="todo-form" 
                value={this.state.value} 
                onChange={e => this.setState({value: e.target.value})}
                placeholder="Add a task..."
                />
                <button className="add-todo__button" type="submit">
                    <BsPlusLg className='plus-icon'></BsPlusLg>
                </button>
            </form>
        );
    }
}
 
export default Todoform;