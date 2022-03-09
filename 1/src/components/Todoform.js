import React, { Component } from 'react';

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
                this.props.transferData({"id":Date.now(), "task": temp, "read":true})
            })
        }
    }


    render() { 
        return (
            <form onSubmit={(e) => this.formSubmit(e)}>
                <input type="text" name="todo-form" value={this.state.value} 
                onChange={e => this.setState({value: e.target.value})} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
 
export default Todoform;