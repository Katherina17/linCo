import {FindPeoplePropsType} from "./FindPeopleContainer";
import {PeopleInfo} from "./PeopleInfo/PeopleInfo";
import {Button} from "../Button/Button";
import s from './FindPeople.module.css';

export const FindPeople = (props: FindPeoplePropsType) => {
    return (
        <section className={s.section}>
            {props.state.map(el => {
                return (
                    <div className={s.infoAndButton}>
                        <PeopleInfo key={el.id}
                                    imgSrc={el.imgSrc}
                                    fullName={el.fullName}
                                    country={el.location.country}
                                    city={el.location.city}
                                    status={el.status}/>
                        <Button callBack={ () => el.isFollow ? props.unFollowUser(el.id) : props.followUser(el.id)} key={el.id} name={el.isFollow? 'Unfollowed' : 'Follow'}/>
                    </div>
                )
            })}
        </section>
    )
}