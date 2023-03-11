import s from './Button.module.css';

type ButtonPropsType = {
    name: string;
    callBack?: () => void;
    className?: string;
    disabled?: boolean
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    const{name, callBack, className} = props;
    let finalClassName = className ? `${className}` : `${s.button}`
    const onClickHandler = () => {
        if(callBack){
            callBack()
        }
    }
    return(
        <button onClick={onClickHandler} className={finalClassName} disabled={props.disabled}>{name}</button>
    )
}