import style from './ListAction.module.css'

type countProps = {
    countTask: number;
    complete: number;
}

export function ListAction ({ countTask, complete }: countProps) {
    return (
        <div className={style.containerListAction}>
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