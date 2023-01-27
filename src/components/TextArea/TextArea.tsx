import s from './TextArea.module.css';
import React, {ChangeEvent} from "react";


type TextAreaPropsType = {
    callBack: (newPostText: string) => void;
    className?: string;
    placeholder: string;
    value: string | undefined;
}

export const TextArea: React.FC<TextAreaPropsType> = (props) => {
    let textAreaValue =  React.createRef<HTMLTextAreaElement>();
    const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.callBack(textAreaValue.current!.value);
    }
    let finalClassName = props.className ? `${props.className}`: `${s.textArea}`;


    return(
        <textarea onChange={onChangeTextAreaHandler}
                  ref={textAreaValue}
                  className={finalClassName}
                  placeholder={props.placeholder}
                  value={props.value}
        ></textarea>
    )
}