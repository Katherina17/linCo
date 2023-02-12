import s from "./FindPeople.module.css";
import {v1} from "uuid";
import {PeopleInfo} from "./PeopleInfo/PeopleInfo";
import {Button} from "../Button/Button";
import React from "react";
import {mapStateToProps} from "./FindPeopleContainer";

type UsersPropsType = {
   setNextPage: () => void
   setPreviousPage: () => void
   setCurrentPage: (num: number) => void
    unFollowUser: (id: number) => void
    followUser: (id: number) => void
} &  mapStateToProps

export const Users = (props:  UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalCount/props.pageSize);
    return <section className={s.section}>
        <button onClick={() => props.setPreviousPage()} disabled={props.currentPage <= 1} >Previous</button>

        {props.firstPages.map(p => {
            return (
                <span key={p} className={props.currentPage === p ? s.currentPage : ''} style={{marginRight: '10px'}} onClick={() => props.setCurrentPage(p)}>{p}</span>
            )
        })}
        <span>...</span>
        {props.lastPages.map((p, index) => {
            return (
                <span key={p} className={props.currentPage === p ? s.currentPage : ''}  style={{marginLeft: '10px'}}  onClick={() => props.setCurrentPage(p)}>{p}</span>
            )
        })}
        <button onClick={props.setNextPage} disabled={pagesCount === props.currentPage} >Next</button>
        {props.state.map(el => {
            return (
                <div className={s.infoAndButton} key={v1()}>
                    <PeopleInfo key={el.id}
                                imgSrc={el.photos.small}
                                name={el.name}
                                status={el.status}/>
                    <Button callBack={ () => el.followed? props.unFollowUser(el.id) : props.followUser(el.id)} key={v1()} name={el.followed? 'Unfollowed' : 'Follow'}/>
                </div>
            )
        })}
    </section>
}