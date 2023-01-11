type ButtonPropsType = {
    name: string;
    callBack: () => void;
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    const{name, callBack} = props;
    const onClickHandler = () => {
        callBack();
    }
    return(
        <button onClick={onClickHandler}>{name}</button>
    )
}