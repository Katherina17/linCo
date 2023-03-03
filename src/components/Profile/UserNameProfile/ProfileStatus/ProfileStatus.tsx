import React, {ChangeEvent} from "react";
import {connect} from "react-redux";
import {changeUserStatusThunk} from "../../../../redux/profileReducer";
import {State} from "../../../../redux/redux-store";

type ProfileStatusPropsType = {
    changeUserStatusThunk: (newStatus: string) => void
} & mapStateToPropsType

type StateType = {
    status: string,
    editableMode: boolean
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, StateType> {
    constructor(props: ProfileStatusPropsType) {
        super(props);
        this.state = {
            status: this.props.status,
            editableMode: false
        }
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<StateType>, snapshot?: any) {
        if(prevProps.status !== this.props.status){
            this.setState({status: this.props.status})
        }
    }

    render() {
        const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
            this.setState({status: e.currentTarget.value})
        }
        const onDoubleClickHandler = () => {
            this.setState({editableMode: true})
        }
        const onBlurInputHandler = () => {
            this.props.changeUserStatusThunk(this.state.status)
            this.setState({editableMode: false})
        }
        return (
        <>
            {this.state.editableMode ?  <input type={'text'} value={this.state.status} onChange={onChangeHandler} onBlur={onBlurInputHandler} autoFocus={true}/>
                : <h2 onDoubleClick={onDoubleClickHandler}>{this.props.status}</h2>
            }
        </>
        )
    }
}

type mapStateToPropsType = {
    status: string
}

const mapStateToProps = (state: State): mapStateToPropsType => {
    return {
        status: state.profile!.status
    }
}

export const ProfileStatusContainer = connect(mapStateToProps,{changeUserStatusThunk})(ProfileStatus)