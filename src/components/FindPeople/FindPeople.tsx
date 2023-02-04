import {FindPeoplePropsType} from "./FindPeopleContainer";
import {PeopleInfo} from "./PeopleInfo/PeopleInfo";
import {Button} from "../Button/Button";
import s from './FindPeople.module.css';
import axios from "axios";

import {PeopleType} from "../../redux/findPeopleReducer";
import {v1} from "uuid";

export const FindPeople = (props: FindPeoplePropsType) => {
    if(props.state.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => props.setUsers(response.data.items));
    }
    return (
        <section className={s.section}>
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
    )
}