import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // interface TodoList = Todo[];
  interface Todo {
    todo: String;
    created: Date;
    active: boolean; // uncompleted = true, completed = false
  };
  
  const [todoList, setTodoList] = useState([{
    todo: 'Pick up kids',
    created: new Date(),
    active: true
  }] as Todo[]);

  const addTodo = () => {
    // return (
    //   <input></input>
    // )
  };

  const sortList = (list: Todo[], by?: String) => {
    // else Date
    setTodoList(list.sort((a,b) => a.created.getTime() - b.created.getTime()))
  }

  // TODO: add checkTodo
  // TODO: add delete todo
  // TODO: add order property to todo of number

  useEffect(() => {},[todoList])
  
  return (
    <div className="App">
      <header>
        Todo List Nov 2021 - Lance
      </header>
      <main>
        <ul className="todoList">
          {todoList.map((item) => {
            if (item.active) {
              return(
                <li className="todo">
                    <input 
                      type="checkbox"
                      checked={!item.active}
                      onClick={() => {console.log('click checkbox for: ', item.todo)}}
                    />
                    <p>{item.todo}</p>
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
