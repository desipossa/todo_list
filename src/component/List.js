import React, { useCallback } from 'react'

const List = ({ list, setList }) => {

    const onDelete = useCallback(idx => {
        const nlist = list.filter(it => idx !== it.id);
        setList(nlist);
    }, [list])
    return (
        <div>
            {
                list.map((it, idx) => {
                    return (
                        <li key={idx}>{it.id} {it.name} {it.content}
                            <button onClick={() => onDelete(it.id)}>DEL</button>
                        </li>
                    )
                })
            }
        </div>
    )
}

export default List