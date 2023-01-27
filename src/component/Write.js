import React, { useCallback, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Write = ({ input, setInput, list, setList, num }) => {
    // const num = useRef(1); router에서는 생애주기가 끝나서 살아있지 않다. 
    const inputRef = useRef([]);
    const navigate = useNavigate();


    const onChange = e => {
        const { name, value } = e.target;

        setInput({
            ...input,
            [name]: value,
            // date: new Date,
            // id: num.current + 1
        });
        console.log(input)
    };

    const onSubmit = useCallback(e => {
        e.preventDefault();
        if (inputRef.current[0].value.length < 2) {
            alert('이름을 입력하세요.');
            inputRef.current[0].focus();
            return
        }
        if (inputRef.current[1].value.length < 5) {
            alert('제목을 5글자 이상 입력하세요.');
            inputRef.current[1].focus();
            return
        }
        if (inputRef.current[2].value.length < 5) {
            alert('내용을 5글자 이상 입력하세요.');
            inputRef.current[2].focus();
            return
        }

        for (let i = 0; i < inputRef.current.length; i++) {
            if (inputRef.current[i].value.length < 1) {
                alert('모든 항목은 필수입니다.');
                return;
            }
        }
        setList([
            ...list, {
                ...input,
                date: new Date,
                id: num.current
            }
        ]);



        setInput({
            name: '',
            subject: '',
            content: '',
        });

        num.current += 1;
        navigate('/');
    }, [input])




    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name='name' onChange={onChange} value={input.name || ''}
                    ref={el => (inputRef.current[0] = el)} />
                <input type="text" name='subject' onChange={onChange} value={input.subject || ''}
                    ref={el => (inputRef.current[1] = el)} />
                <textarea type="text" name='content' onChange={onChange} value={input.content || ''}
                    ref={el => (inputRef.current[2] = el)} />
                <button>WRITE</button>
            </form>
        </div>
    )
}

export default Write