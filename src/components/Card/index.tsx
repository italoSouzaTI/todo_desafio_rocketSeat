import { Task } from '../../App'
import style from './Card.module.css'

import { CheckCircle, Trash, RadioButton } from 'phosphor-react'

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
                    <CheckCircle />
                ) : (
                    <RadioButton />
                )}
            </button>
            <p>{dados.label}</p>
            <button
                className={style.delete}
                onClick={() => { isDelete(dados.id) }}
            >
                <Trash />
            </button>

        </div>
    )
}