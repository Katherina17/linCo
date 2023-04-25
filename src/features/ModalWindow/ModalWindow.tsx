import s from './ModalWindow.module.css'
import {useEffect, MouseEvent} from "react";

type ModalWindow = {
    isActive: boolean,
    children: React.ReactNode
    closed?: () => void
}

export const ModalWindow = (props: ModalWindow) => {
    const{isActive, children, closed} = props;
    function onEmptyAreaClick(e: MouseEvent<HTMLDivElement>) {
        if( e.currentTarget.className === s.modalWindowContainer)
            if(closed){
                closed()
            }
    }
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "visible";
        }
    }, [])
    return(
        <div className={ isActive? s.modalWindowContainer + ' ' + s.active : s.modalWindowContainer}
             onClick={onEmptyAreaClick}
        >
            {children}
        </div>
    )
}