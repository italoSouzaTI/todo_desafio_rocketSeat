import { Task } from '../../App'
import style from './Card.module.css'

import { CheckCircle, Trash, Circle } from 'phosphor-react'

type CardProps = {
    dados: Task,
    isDelete: (id: string) => void
    isCheck: (id: string) => void
}

export function Card ({ dados, isDelete, isCheck }: CardProps) {

    return (
        <div className={style.ContainerCard}>
            <button
                onClick={() => { isCheck(dados.id) }}
                className={style.check}>
                {dados.isFinish ? (
                    <CheckCircle
                        color="#5E60CE"
                    />
                ) : (
                    <Circle />
                )}
            </button>
            <p
                style={{
                    textDecoration: dados.isFinish ? 'line-through' : 'none',
                    color: dados.isFinish ? '#808080' : '#F2F2F2'
                }}
            >{dados.label}</p>
            <button
                className={style.delete}
                onClick={() => { isDelete(dados.id) }}
            >
                <Trash />
            </button>

        </div >
    )
}