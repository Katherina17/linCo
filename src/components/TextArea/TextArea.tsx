import s from './TextArea.module.css';
import React from "react";
import { WrappedFieldProps} from "redux-form/lib/Field";


export const TextArea = (props: WrappedFieldProps & {placeholder: string}) => {
    let { input, meta: { touched, error, warning }} = props;
    let hasError = touched && error
    let hasWarning = touched && warning

    let finalClassName = s.textArea + ' ' + (hasError ? s.errorTextArea : '') + ' '
        + (hasWarning ? s.textAreaWarning : '') + (input.name === 'message' ? s.messageTextArea : '')

    return(
       <>
        <div className={s.textAreaAndLabel}>
           <textarea className={finalClassName} {...input} placeholder={props.placeholder} />
            {hasError && <span className={s.error}>{error}</span> || hasWarning  && <span>{warning}</span>}
        </div>
       </>
    )
}
