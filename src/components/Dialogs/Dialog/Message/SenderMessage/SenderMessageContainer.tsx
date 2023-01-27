import {addNewMessageActionCreator, updateMessageActionCreator} from "../../../../../redux/dialogsReducer";
import {SenderMessage} from "./SenderMessage";
import {StoreContext} from "../../../../../redux/StoreContext";
import React from "react";


export const SenderMessageContainer: React.FC = (props) => {
    return(
        <StoreContext.Consumer>
            {
                store => {
                    const updateValue = (newMessage: string) => {
                        store?.dispatch(updateMessageActionCreator(newMessage));
                    }

                    const sendMessage = () => {
                        store?.dispatch(addNewMessageActionCreator());
                    }
                    return <SenderMessage newMessageText={store?.getState().dialogs.newContent} updateValue={(newMessage) => updateValue(newMessage)} sendMessage={sendMessage}/>
                }
            }
        </StoreContext.Consumer>
    )
}