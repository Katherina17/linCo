import {FindPeoplePropsType} from "./FindPeopleContainer";
import {PeopleInfo} from "./PeopleInfo/PeopleInfo";
import {Button} from "../Button/Button";
import s from './FindPeople.module.css';
import axios from "axios";
import {v1} from "uuid";
import React from 'react';



export class FindPeople extends React.Component<FindPeoplePropsType>{
    constructor(props: FindPeoplePropsType){
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => props.setUsers(response.data.items))
    }
    render(){
        return <section className={s.section}>
            {this.props.state.map(el => {
                return (
                    <div className={s.infoAndButton} key={v1()}>
                        <PeopleInfo key={el.id}
                                    imgSrc={el.photos.small}
                                    name={el.name}
                                    status={el.status}/>
                        <Button callBack={ () => el.followed? this.props.unFollowUser(el.id) : this.props.followUser(el.id)} key={v1()} name={el.followed? 'Unfollowed' : 'Follow'}/>
                    </div>
                )
            })}
        </section>
    }

}