import s from "./FindPeople.module.css";
import {v1} from "uuid";
import {PeopleInfo} from "./PeopleInfo/PeopleInfo";
import {Button} from "../Button/Button";
import React, {ChangeEvent} from "react";
import {mapStateToProps} from "./FindPeopleContainer";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {followAPI} from "../../api/api";


type UsersPropsType = {
   setCurrentPage: (num: number) => void
    unFollowUser: (id: number) => void
    followUser: (id: number) => void
    setFollowingAC: (userID: number, isFollowing: boolean) => void
} &  mapStateToProps

export const Users = (props:  UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalCount/props.pageSize);
    const onChangePaginationHandler = (event:ChangeEvent<unknown>, page: number) => {
        props.setCurrentPage(page)
    }
    const paginationStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '100%',

}

    return <section className={s.section}>
        {props.state.map(el => {
            const subscribeUser = (userID: number) => {
                props.setFollowingAC(el.id,true)
                followAPI.followUser(userID).then((response) => {
                        if(response.data.resultCode === 0){
                            props.followUser(userID)
                        }
                        props.setFollowingAC(el.id,false)
                    }
                )
            }

            const unsubscribeUser = (userID: number) => {
                props.setFollowingAC(el.id,true)
                followAPI.unFollowUser(userID).then((response) => {
                        if (response.data.resultCode === 0) {
                            props.unFollowUser(userID)
                        }
                        props.setFollowingAC(el.id,false)
                    }
                )
            }
            return (
                <div className={s.infoAndButton} key={v1()}>
                    <PeopleInfo key={el.id}
                                imgSrc={el.photos.small}
                                name={el.name}
                                status={el.status}
                                id={el.id}/>
                     <Button callBack={ () => el.followed? unsubscribeUser(el.id) : subscribeUser(el.id)} key={v1()}
                                     name={el.followed? 'Unfollowed' : 'Follow'}
                                     disabled={props.followingInProgress  ? props.followingInProgress.some((e:number) => e === el.id) : false}
                    />

                </div>
            )
        })}
        <div className={s.pagination}>
            <Stack style={paginationStyle}>
                <Pagination count={pagesCount}
                            page={props.currentPage}
                            size={"large"}
                            onChange={onChangePaginationHandler}/>
            </Stack>
        </div>
    </section>
}