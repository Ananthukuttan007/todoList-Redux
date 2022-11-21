import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add_todo, delete_todo } from './Redux/todoSlice';


class TodoList extends Component {
    state = {
        input: ""
    }
    DeleteTodo = (e) => {
        const newList = this.props.list.filter((elem) => elem.id != e.target.value)
        this.props.delete_todo({
            list: newList
        })
    }
    AddTodo() {
        if (this.state.input) {

            this.props.add_todo({
                list: [...this.props.list, { id: Math.random(), data: this.state.input }]
            })
            this.setState((prev) => ({ input: "" }))
        }
        else {
            alert("Type Something")
        }
    }
    render() {
        return (
            <>
                <div className="main-div">
                    <div className="child-div">
                        <figure>
                            <figcaption>Add your list here</figcaption>
                        </figure>
                        <div className="add-items">
                            <div>
                                <input required type="text" placeholder='Type the task'
                                    value={this.state.input}
                                    onChange={(e) => this.setState({ input: e.target.value })} />
                                <button onClick={
                                    this.AddTodo.bind(this)
                                } >Submit</button>
                            </div>
                            {this.props.list.map(task => {
                                return (

                                    <div key={task.id}>{task.data} <button value={task.id} onClick={this.DeleteTodo}>Delete</button></div>


                                )
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        list: state.list.value
    }
}
export default connect(mapStateToProps, { add_todo, delete_todo })(TodoList);