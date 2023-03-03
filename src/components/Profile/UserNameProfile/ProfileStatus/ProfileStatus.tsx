import React, {ChangeEvent, MouseEvent, FocusEvent} from "react";

type ProfileStatusPropsType = {
    status: string,
    changeUserStatusAC: (status: string) => void
}

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
    render() {
        const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
            this.setState({status: e.currentTarget.value})
        }
        const onDoubleClickHandler = () => {
            this.setState({editableMode: true})
        }
        const onBlurInputHandler = () => {
            this.props.changeUserStatusAC(this.state.status)
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