import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {MUField} from "../../../../Authorization/MUField";
import * as React from "react";
import {UserProfile} from "../../../../../redux/profileReducer";
import s from './ProfileFormData.module.css'
import {required} from "../../../../../utils/validators/validators";


export type ProfileFormDataType = {
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string | null
        facebook: string | null
        insta: string | null
        vk: string | null
    }
}



const ProfileFormData = (props: InjectedFormProps<UserProfile>) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.formData}>
         <Field
                               name='fullName'
                               type={'text'}
                               label="change FullName"
                               variant="standard"
                               required
                               validate={[required]}
                               component={MUField}/>
          <Field
                               name='aboutMe'
                               type={'text'}
                               label="about Me"
                               variant="standard"
                               required
                               validate={[required]}
                               component={MUField}/>
         <div className={s.checkbox}> Are you looking for a job? <Field name='lookingForAJob'
                type={'checkbox'}
                variant="standard"
                label={'looking for a job'}
                component={'input'}
                />
         </div>

           <Field
                name='lookingForAJobDescription'
                type={'text'}
                label="The job description"
                variant="standard"
                component={MUField}/>


            {Object.keys(props.initialValues.contacts!).map(el=> {
                return <Field
                    key={el}
                    name={'contacts.' + '' +el}
                    type={'text'}
                    label={el}
                    variant="standard"
                    component={MUField}/>

            })}
            {props.error && props.touch() && <span> {props.error} </span>}
            <button> Save </button>
        </form>
    )
}


export const ProfileFormDataContainer = reduxForm< UserProfile >({
    form: 'profileFormData'
})(ProfileFormData)


