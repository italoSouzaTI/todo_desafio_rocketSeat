import { useState } from 'react'
import styles from './Input.module.css'
import { PlusCircle } from 'phosphor-react'

interface InputProps {
    addtask: (label: string) => void
}

export function Input ({ addtask }: InputProps) {
    const [newTask, setNewTask] = useState<string>('');

    function verifytask (label: string) {
        if (newTask.trim().length === 0) {
            alert('Preencha o campo para adicionar');
        }
        addtask(newTask);
        setNewTask('');
    }

    return (
        <div className={styles.container}>
            <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder='Adicione um nova tarefa'
                type="text" />
            <button
                onClick={verifytask}
            >
                <p>Criar</p>
                <PlusCircle />
            </button>
        </div>
    )
}