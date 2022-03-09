import React, { Component } from 'react';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.tasks
        }
    }

    componentDidUpdate(prevProps) {
        console.log(prevProps)
        if(this.props.tasks !== prevProps.tasks){
            this.setState({todos: this.props.tasks})
        }
    }



    render() { 
        console.log("rerender")
        return (
            <div>
                {this.state.todos.map((item, index) => {
                    return (
                    <div key={item.id} >
                        <input 
                            type="text"
                            name="todo-task"
                            value={`${index+1}- ${item.task}`} 
                            readOnly={item.read}
                        />
                        <button>edit</button>
                        <button>done</button>
                        <button onClick={() => this.props.remove(item)}>delete</button>
                    </div>
                    );
                })}
                
                <button>delete</button>
            </div>
        );
    }
}
 
export default Todolist;