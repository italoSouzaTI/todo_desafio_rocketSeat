import style from './EmptyContainer.module.css'
import Clipboard from '../../assets/Clipboard.svg'
export function EmptyContainer () {
    return (
        <div className={style.containerEmpaty}>
            <img src={Clipboard} />
            <p className={style.textBold}>
                Você ainda não tem tarefas cadastradas
            </p>
            <p>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}