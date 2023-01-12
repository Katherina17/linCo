import s from './TextArea.module.css';
import React from "react";


type TextAreaPropsType = {
    callBack: (currentValue: string) => void;
}

export const TextArea: React.FC<TextAreaPropsType> = (props) => {
    let textAreaValue = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        let text = textAreaValue.current?.value;
        alert(text)
    }

    const styleTextArea = {
        border: '2px #f5f7fb solid',
        borderRadius: '0.5rem',
        padding: '1rem',
    }
    return(
        <textarea onChange={addPost} ref={textAreaValue} className={s.textArea} style={styleTextArea} placeholder={'text message...'}></textarea>
    )
}