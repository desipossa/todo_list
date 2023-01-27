import React, { useCallback, useRef } from 'react'

const Write = ({ input, setInput, list, setList }) => {
    const num = useRef(2);
    const inputref = useRef(null);

    const onSubmit = useCallback(e => {
        e.preventDefault();

        if (input.name.length < 3) {
            alert('마 더 입력해라...');
            inputref.current.focus();
            return
        }
        console.log(input)
        setList([
            ...list, input
        ]);

        num.current = num.current + 1;

        setInput({
            ...input, name: '', id: num.current
        })
    }, [input])

    const onChange = useCallback(e => {
        const { name, value } = e.target;

        setInput({
            ...input, name: value, id: num.current
        })
    }, [input])
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name='name' onChange={onChange} value={input.name || ''} ref={inputref} />
                <button>WRITE</button>
            </form>
        </div>
    )
}

export default Write