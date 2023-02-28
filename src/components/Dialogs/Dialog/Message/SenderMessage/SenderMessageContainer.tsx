import {
    addNewMessageActionCreator,
    commonActionDialogsTypes,
    updateMessageActionCreator
} from "../../../../../redux/dialogsReducer";
import {SenderMessage} from "./SenderMessage";
import React from "react";
import {connect} from "react-redux";
import {State} from "../../../../../redux/redux-store";
import {AuthRedirect} from "../../../../hoc/AuthRedirect";

type mapStateToPropsType = {
    newMessageText: string
}

type mapDispatchToPropsType = {
    updateValue: (newMessage: string) => void;
    sendMessage: () => void;
}

export type SenderMessagePropsType = mapDispatchToPropsType & mapStateToPropsType;

const mapStateToProps = (state: State):mapStateToPropsType => {
    return{
        newMessageText: state.dialogs!.newContent
    }
}

const mapDispatchToProps = (dispatch: (action: commonActionDialogsTypes) => void): mapDispatchToPropsType => {
    return{
        updateValue: (newMessage: string) => dispatch(updateMessageActionCreator(newMessage)),
        sendMessage: () => dispatch(addNewMessageActionCreator()),
    }
}

let withRediretcSenderMessage:any = AuthRedirect(SenderMessage);

type mapStateToPropsForRedirect = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state:State):mapStateToPropsForRedirect => {
    return {isAuth: state.auth!.isAuth}
}
withRediretcSenderMessage = connect(mapStateToPropsForRedirect)(withRediretcSenderMessage)

export const SenderMessageContainer = connect(mapStateToProps, mapDispatchToProps)(withRediretcSenderMessage);