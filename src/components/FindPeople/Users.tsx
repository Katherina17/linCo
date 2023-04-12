import s from "./FindPeople.module.css";
import React, {ChangeEvent} from "react";
import {mapStateToProps} from "./FindPeopleContainer";
import {Paginator} from "../FindPeople/Paginator";
import {UserFindPeople} from "./User";


type UsersPropsType = {
   setCurrentPage: (num: number) => void
    subscribeUserThunkCreator: (userID: number) => void
    unSubscribeUserThunkCreator: (userID: number) => void
} &  mapStateToProps

export const Users = (props: UsersPropsType) => {
    const onChangePaginationHandler = (event: ChangeEvent<unknown>, page: number) => {
        props.setCurrentPage(page)
    }
    return <section className={s.section}>
        {props.state.map(el => {
            return <UserFindPeople imgSrc={el.photos.small}
                         name={el.name}
                         id={el.id}
                         unSubscribeUserThunkCreator={props.unSubscribeUserThunkCreator}
                         subscribeUserThunkCreator={props.subscribeUserThunkCreator}
                         status={el.status}
                         followingInProgress={props.followingInProgress}
                         followed={el.followed}
                         key={el.id}
            />
        })}
        <Paginator
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            totalCount={props.totalCount}
            onChangePaginationHandler={onChangePaginationHandler}/>
    </section>
}