import React, { useCallback } from 'react'

const List = ({ list, setList }) => {

    const onDelete = useCallback(date => {
        const nlist = list.filter(it => date !== it.date);
        setList(nlist);
    }, [list])
    return (
        <div>
            {
                list.map((it, idx) => {
                    return (
                        <li key={idx}>{it.id} {it.name} {it.subject} {it.content} {it.date.toLocaleString().slice(11, 21)}
                            <button onClick={() => onDelete(it.date)}>DEL</button>
                        </li>
                    )
                })
            }
        </div>
    )
}

export default List