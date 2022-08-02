import { useState } from 'react'
import { v4 as uuid } from 'uuid'

// components
import { Header } from './components/Header';
import { Input } from './components/Input';
import { ListAction } from './components/ListAction';
import { EmptyContainer } from './components/EmptyContainer';
import { Card } from './components/Card'

// styles
import style from './App.module.css'

// interface
export type Task = {
  id: string,
  isFinish: boolean,
  label: String
}

function App () {
  const [task, setTask] = useState<Task[]>([]);
  const [countComplete, setCountComplete] = useState(0);

  function handleAdd (event: string) {
    const params = {
      id: uuid(),
      isFinish: false,
      label: event
    }
    setTask(prevState => [...prevState, params])
  }

  function handleDele (event: string) {
    let newArray = task.filter(item => item.id != event);
    setTask(newArray);
  }

  function handleCheck (event: string) {
    let cloneArray = task.slice();
    let index = cloneArray.findIndex(item => item.id === event);
    let remove = cloneArray.splice(index, 1);
    if (remove[0].isFinish === false) {
      remove[0].isFinish = true;
      cloneArray.push(...remove);
    } else {
      remove[0].isFinish = false;
      cloneArray.splice(0, -1, remove[0]);

    }

    finish(cloneArray)
    setTask(cloneArray);
  }

  function finish (item: Task) {
    let inicialValue = 0;
    let sume = item.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual.isFinish;
    }, inicialValue)
    setCountComplete(sume)
  }


  return (
    <>
      <Header />
      <Input
        addtask={handleAdd}
      />
      <div className={style.containerApp}>
        <ListAction
          complete={countComplete}
          countTask={task.length}
        />
        {task.length > 0 ? (
          <>
            {task.map((item) => (
              <Card
                isCheck={handleCheck}
                isDelete={handleDele}
                dados={item}
                key={item.id}

              // addTask={handleAdd}
              />
            ))}
          </>
        ) : (
          <EmptyContainer />
        )}


      </div>
    </>
  )
}

export default App
