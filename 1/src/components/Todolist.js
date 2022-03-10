import React, { Component } from 'react';
import {GrEdit} from 'react-icons/gr'
import {GrClose} from 'react-icons/gr'
import {FaCheck} from 'react-icons/fa'

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.tasks
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.tasks !== prevProps.tasks) {
            this.setState({todos: this.props.tasks})
        }
    }


    editTasks(item , value) {
        let editedData = this.state.todos;
        editedData.map((todo) => {
            if (todo === item) {
                todo.task = value
            }
        })
        this.setState({todos: editedData}, () => {
            this.props.transferData(this.state.todos)
        })
    }


    activateInputs(item, value) {
        let editedData = this.state.todos;
        editedData.map((todo) => {
            if (todo == item) {
                todo.read = !value
            }
        })
        this.setState({todos: editedData})
    }


    render() { 
        return (
            <div className='list-section'>
                {this.state.todos.map((item, index) => {
                    return (
                    <div className="todo-div" key={item.id}>
                        <label className='todo-number'>{index+1}</label>
                        <input
                            className={item.read? "todos read": "todos write"}
                            type="text"
                            name="todo-task"
                            value={`${item.task}`}
                            readOnly={item.read}
                            onChange={e => this.editTasks(item, e.target.value)}
                        />
                        <button 
                        className={item.read? "edit-button read": "edit-button write"}
                        onClick={() => this.activateInputs(item, item.read)}>
                            {item.read? <GrEdit className='edit-icon'></GrEdit>: <FaCheck className='edit-icon'></FaCheck>}
                        </button>
                        <button 
                        className='remove-button'
                        onClick={() => this.props.remove(item)}>
                            <GrClose className='close-icon'></GrClose>
                        </button>
                    </div>
                    );
                })}
            </div>
        );
    }
}
 
export default Todolist;