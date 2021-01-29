import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            todo: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo)
        this.setState({
            todo: ''
        })
    }

    render(){
        return <div className="form-container">
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="todo" 
                    value={this.state.todo} 
                    placeholder="Type todo here..."
                    onChange={(e) => this.changeHandler(e)}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    }
}

export default Form;