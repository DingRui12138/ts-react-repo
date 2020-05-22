import { connect } from 'react-redux'
import { addTodo, toggleTodo } from './Action'
import React, { Component, Fragment } from 'react'
import type { TODO_ITEM } from './Reducer'

type TodoState = {
  todoState: {
    visibilityFilter: string
    todos: TODO_ITEM[]
  }
}

interface Props {
  todoList: TODO_ITEM[]
}
interface State {
  text: string
}

class Main extends Component<Props, State> {
  static defaultProps = {}
  state: State = {
    text: 'SOME TEXT',
  }
  private todoList: TODO_ITEM[]

  constructor(props: Props) {
    super(props)

    const { todoList } = props
    this.todoList = todoList

    this._handleChange = this._handleChange.bind(this)
    this._addTodo = this._addTodo.bind(this)

    // this.state = {
    //   todoList: [],
    // }
  }

  _addTodo(text: String) {
    const res = addTodo(text)
    console.log(res)
    // this.setState({
    //   text: '',
    // })
  }

  _handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    console.log(this)
    this.setState({
      text: value,
    })
  }

  render() {
    return (
      <div>
        <Fragment>
          <input
            type="text"
            value={this.state.text}
            onChange={this._handleChange}
          />
          <button onClick={() => this._addTodo(this.state.text)}>add</button>
        </Fragment>
        <div className="list">
          {this.todoList.map((todo, idx) => {
            return (
              <div className="item" key={idx}>
                {todo.msg}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: TodoState) => {
  console.log(state)
  return {
    todoList: state.todoState.todos,
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  toggleTodo: (data: any) => dispatch(toggleTodo(data)),
  addTodo: (data: any) => dispatch(addTodo(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
