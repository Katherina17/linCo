import {
    addNewMessageActionCreator,
    commonActionDialogsTypes,
    updateMessageActionCreator
} from "../../../../../redux/dialogsReducer";
import {SenderMessage} from "./SenderMessage";
import React from "react";
import {connect} from "react-redux";
import {State} from "../../../../../redux/redux-store";
import {withAuthRedirect, mapStateToPropsForRedirect} from "../../../../hoc/WithAuthRedirect";
import {compose} from "redux";

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


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(SenderMessage)

