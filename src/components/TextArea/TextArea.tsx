import s from './TextArea.module.css';
import React, {ChangeEvent, Component} from "react";
import {BaseFieldProps, GenericFieldHTMLAttributes, WrappedFieldProps} from "redux-form/lib/Field";


/*type TextAreaPropsType = {
    callBack?: (newPostText: string) => void;
    className?: string;
    placeholder?: string;
    value?: string
}*/

export const TextArea: React.FC = (props: any) => {
    let { input, label, type, meta: { touched, error, warning } } = props;
/*    let textAreaValue =  React.createRef<HTMLTextAreaElement>();*/
/*    const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if(props.callBack){
            props.callBack(textAreaValue.current!.value);
        }
    }*/
  /*  let finalClassName = props.className ? `${props.className}`: `${s.textArea}`;*/
    let hasError = touched && error
    let hasWarning = touched && warning

    let finalClassName = s.textArea + ' ' + (hasError ? s.errorTextArea : '') + ' '
        + (hasWarning ? s.textAreaWarning : '') + (input.name === 'message' ? s.messageTextArea : '')

    return(
       <>

        <div className={s.textAreaAndLabel}>
           <textarea className={finalClassName} {...input} placeholder={label}/>
            {hasError && <span className={s.error}>{error}</span> || hasWarning  && <span>{warning}</span>}
        </div>
       </>
    )
}
/*

onChange={onChangeTextAreaHandler}
ref={textAreaValue}
className={finalClassName}
placeholder={props.placeholder}
value={props.value}*/
