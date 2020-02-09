import React, { Component } from "react";
import { connect } from "react-redux";
import { getVisibleTodos, getIsFetching, getErrorMessage } from "../reducers";
import * as actions from "../actions";
import { withRouter } from "react-router";
import FetchError from "./FetchError";
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text}
  </li>
);

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter).then(() => console.log("done"));
  }

  render() {
    const { isFetching, errorMessage, toggleTodo, todos } = this.props;
    console.log(toggleTodo);
    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }
    if (errorMessage && !todos.length) {
      return (
        <FetchError message={errorMessage} onRetry={() => this.fetchData()} />
      );
    }
    return <TodoList todos={todos} onTodoClick={toggleTodo} />;
  }
}

const mapStateToTodoListProps = (state, { match }) => {
  const filter = match.params.filter || "all";
  console.log(state, filter);
  return {
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    todos: getVisibleTodos(state, filter),
    filter
  };
};

// short hand notation is used below
// use only when params of action creator and props are same
// const mapDispatchToTodoListProps = dispatch => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id));
//   }
// });

VisibleTodoList = withRouter(
  connect(
    mapStateToTodoListProps,
    actions
  )(VisibleTodoList)
);

export default VisibleTodoList;
