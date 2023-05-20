import React, {ChangeEvent, useEffect, useState} from "react";
import {connect} from "react-redux";
import {RootState, State} from "../../../../redux/redux-store";
import {changeUserStatusThunk} from "../../../../redux/profileReducer";
import {RequestStatusType} from "redux/appReducer";

type ProfileStatusPropsType = {
    changeUserStatusThunk: (newStatus: string) => void
} & mapStateToPropsType


export const ProfileStatus = (props: ProfileStatusPropsType) =>  {
    const [status, setStatus] = useState(props.status);
    const [editableMode, setEditableMode] = useState(false);


    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    useEffect(() => {
        if(props.error !== null){
            setEditableMode(true)
        }
    }, [props.error])


    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    const onDoubleClickHandler = () => {
        setEditableMode(true)
    }
    const onBlurInputHandler = () => {
        if(props.error !== null){
            setEditableMode(true)
        } else {
            props.changeUserStatusThunk(status)
            setEditableMode(false)
        }
    }

    return (
        <>
            {editableMode ?
                <input type={'text'} value={status} onChange={onChangeHandler} onBlur={onBlurInputHandler}
                       autoFocus={true} />
                : <h2 onDoubleClick={onDoubleClickHandler}>{props.status}</h2>
            }
        </>
    )
}

type mapStateToPropsType = {
    status: string,
    error: null | string
}

const mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        status: state.profile.status,
        error: state.app.error
    }
}

export const ProfileStatusContainer = connect(mapStateToProps,{changeUserStatusThunk})(ProfileStatus)