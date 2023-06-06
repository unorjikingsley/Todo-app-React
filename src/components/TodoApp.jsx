import Header from '@/components/Header';
import TodoLogic from '@/components/TodosLogic';

import '@/styles/app.css';

const TodoApp = () => (
  <div className="wrapper">
    <div className="todos">
      <Header />
      <TodoLogic />
    </div>
  </div>
);
export default TodoApp;
