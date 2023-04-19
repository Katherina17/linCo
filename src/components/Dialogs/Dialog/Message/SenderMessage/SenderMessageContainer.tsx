import {
    addNewMessageActionCreator
} from "../../../../../redux/dialogsReducer";
import {SenderMessage} from "./SenderMessage";
import React from "react";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../../hoc/WithAuthRedirect";
import {compose} from "redux";

type mapDispatchToPropsType = {
    sendMessage: (newMessage: string) => void;
}

export type SenderMessagePropsType = mapDispatchToPropsType;

export default compose<React.ComponentType>(
    connect(null, {sendMessage: addNewMessageActionCreator}),
    withAuthRedirect
)(SenderMessage)

