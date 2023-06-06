import Header from '@/components/Header';
import TodoLogic from '@/components/TodosLogic';
import NavBar from '@/routes/NavBar';

import '@/styles/app.css';

const TodoApp = () => (
  <div className="wrapper">
    <NavBar />
    <div className="todos">
      <Header />
      <TodoLogic />
    </div>
  </div>
);
export default TodoApp;
