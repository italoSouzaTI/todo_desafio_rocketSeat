import style from './ListAction.module.css'

export function ListAction ({ countTask, complete }) {
    return (
        <div className={style.container}>
            <div>
                <p className={style.create}>Tarefas criadas</p>
                <span>{countTask ?? '0'}</span>
            </div>
            <div>
                <p className={style.finish}>Concluídas</p>
                <span>
                    {complete > 0 ? (
                        <>
                            {complete} de {countTask}
                        </>
                    ) : (
                        '0'
                    )}
                </span>
            </div>


        </div>
    )
}