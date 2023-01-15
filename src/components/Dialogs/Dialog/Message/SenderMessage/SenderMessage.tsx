import {TextArea} from "../../../../TextArea/TextArea";
import {Button} from "../../../../Button/Button";
import s from './SenderMessage.module.css'


export const SenderMessage: React.FC<any> = () => {
    return(
        <div className={s.senderMessage}>
          {/*  <TextArea callBack={() =>{}}/>*/}
            <Button name={'send'} callBack={() => {}}/>
        </div>
    )
}