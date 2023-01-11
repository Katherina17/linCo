import s from './TextArea.module.css';


type TextAreaPropsType = {
    callBack: (currentValue: string) => void;
}

export const TextArea: React.FC<TextAreaPropsType> = (props) => {

    const styleTextArea = {
        border: '2px #f5f7fb solid',
        borderRadius: '0.5rem',
        padding: '1rem',
    }
    return(
        <textarea className={s.textArea} style={styleTextArea} placeholder={'text message...'}></textarea>
    )
}