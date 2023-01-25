import {commonActionTypes, DialogsType, ProfileType} from "../../../../../redux/state";
import {addNewMessageActionCreator, updateMessageActionCreator} from "../../../../../redux/dialogsReducer";
import {EmptyObject, Store} from "redux";
import {SenderMessage} from "./SenderMessage";

type SenderMessagePropsType = {
    store: Store<EmptyObject & {profile: ProfileType, dialogs: DialogsType}, commonActionTypes>;
}

export const SenderMessageContainer: React.FC<SenderMessagePropsType> = (props) => {
    const{store} = props;
    const updateValue = (newMessage: string) => {
        store.dispatch(updateMessageActionCreator(newMessage));
    }

    const sendMessage = () => {
        store.dispatch(addNewMessageActionCreator());
    }

    return(
        <SenderMessage newMessageText={props.store.getState().dialogs.newContent} updateValue={(newMessage) => updateValue(newMessage)} sendMessage={sendMessage}/>
    )
}