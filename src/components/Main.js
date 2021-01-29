import React, {Component} from 'react';
import axios from 'axios';
import Form from './Form';
import Todo from './Todo';

class Main extends Component {
    constructor(){
        super();
        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        this.getTodos();
    }

    getTodos = () => {
        axios.get('/api/todos')
        .then(res => {
            this.setState({
                todos: res.data
            })
        })
    }

    addTodo = (task) => {
        axios.post('/api/todos', {task})
        .then(res => {
            this.setState({
                todos: res.data
            })
        })
    }

    completeTodo = id => {
        axios.put(`/api/todos/${id}`)
        .then(res => {
            this.setState({
                todos: res.data
            })
        })
    }

    deleteTodo = id => {
        axios.delete(`/api/todos/${id}`)
        .then(res => {
            this.setState({
                todos: res.data
            })
        })
    }

    render(){
        const mappedTodos = this.state.todos.map(todo => {
            return <Todo 
                    key={todo.id} 
                    deleteTodo={this.deleteTodo} 
                    completeTodo={this.completeTodo} 
                    todo={todo}/>
        })
        return <div className="main">
            <Form addTodo={this.addTodo}/>
            {mappedTodos}
        </div>
    }

}

export default Main;