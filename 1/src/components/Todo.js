import React, { Component } from 'react';
import Todoform from './Todoform';
import Todolist from './Todolist';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
        this.getInfoFromForm = this.getInfoFromForm.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    componentDidUpdate() {

    }

    getInfoFromForm(info) {
        this.setState({tasks: [...this.state.tasks, info]})
    }

    removeTodo(item) {
        let temp = this.state.tasks.filter(todo => todo !== item)
        this.setState({tasks: temp})
    }

    render() { 
        return (
            <div>
                <Todoform tasks={this.state.tasks} transferData={this.getInfoFromForm} />
                <Todolist 
                tasks={this.state.tasks} 
                remove={this.removeTodo}
                />
            </div>
        );
    }
}
 
export default Todo;