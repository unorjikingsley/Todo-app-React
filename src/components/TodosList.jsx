// serves as a container for the todos item

import PropTypes from 'prop-types';
import TodoItems from '@/components/TodoItems';

const TodosList = ({ todosProps, setTodos, delTodo }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItems
        key={todo.id}
        itemProp={todo}
        setTodos={setTodos}
        delTodo={delTodo}
      />
    ))}
  </ul>
);

export default TodosList;

TodosList.propTypes = {
  todosProps: PropTypes.array,
  setTodos: PropTypes.func,
  delTodo: PropTypes.func,
  addTodoItem: PropTypes.func,
};
