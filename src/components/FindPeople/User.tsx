import s from "./FindPeople.module.css";
import {PeopleInfo} from "./PeopleInfo/PeopleInfo";
import {Button} from "../Button/Button";
import React from "react";
import {RequestStatusType} from "redux/appReducer";


type UserPropsType = {
    img: {small: string | null, large: string | null}
    name: string
    status: string | null
    id: number
    followed: boolean
    unSubscribeUserThunkCreator: (id: number) => void
    subscribeUserThunkCreator: (id: number) => void
    followingInProgress: number[]
    statusApp: RequestStatusType
}

export const UserFindPeople = (props: UserPropsType) => {
    return <div className={s.infoAndButton}>
        <PeopleInfo img={props.img}
                    name={props.name}
                    status={props.status}
                    id={props.id}/>
        <Button
            callBack={() => props.followed ?
                props.unSubscribeUserThunkCreator(props.id)
                : props.subscribeUserThunkCreator(props.id)}
            name={props.followed ? 'Unfollowed' : 'Follow'}
            disabled={props.followingInProgress ? props.followingInProgress.some((e: number) => props.statusApp === "loading" && e === props.id ) : false
                }
        />
    </div>
}