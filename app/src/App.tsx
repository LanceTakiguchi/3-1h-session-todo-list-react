import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // interface TodoList = Todo[];
  interface Todo {
    [text: string]: any;
    // created: Date;
    isChecked: boolean;
  };

  interface TodoList {
    [todo: string]: Todo;
  };
  
  const [todoList, setTodoList] = useState({
    'Pick up kids': {
      text: 'Pick up kids',
      isChecked: false
    }
    // created: new Date(),
  } as TodoList);

  const checkTodo = (todo: Todo, state: boolean) => {
    const newTodoList: TodoList = {...todoList};
    newTodoList[todo.text] = {todo.text: {text: todo.text, isChecked: state}};
    console.log('What is the new TodoList:', newTodoList)
    setTodoList(newTodoList);
  };

  const addTodo = () => {
    console.log('TODO: add a addTodo');
  }

  // const sortList = (list: Todo[], by?: String) => {
    // else Date
    // setTodoList(list.sort((a,b) => a.created.getTime() - b.created.getTime()))
  // }

  // TODO: add checkTodo
  // TODO: add delete todo
  // TODO: add order property to todo of number

  useEffect(() => {
  },[todoList])
  
  return (
    <div className="App">
      <header>
        Todo List Nov 2021 - Lance
      </header>
      <main>
        <ul className="todoList">
          {todoList.map((item) => {
            if (!item.isChecked) {
              return(
                <li className="todo" key={item.todo.toString()}>
                    <input 
                      type="checkbox"
                      checked={item.isChecked}
                      onClick={() => {checkTodo(item.text, !item.isChecked)}}
                    />
                    <p>{item.text}</p>
                </li>
                )
            }
          })}
        </ul>
        <div className="addTodo">
          <input
            type='text'
            placeholder='Buy groceries...'
          />
          <button 
            onClick={() => addTodo()}
          >
            Add a TODO
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
