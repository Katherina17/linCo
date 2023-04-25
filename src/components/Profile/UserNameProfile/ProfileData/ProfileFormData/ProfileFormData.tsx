import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {MUField} from "../../../../Authorization/MUField";
import * as React from "react";
import {UserProfile} from "../../../../../redux/profileReducer";
import s from './ProfileFormData.module.css'
import {required} from "../../../../../utils/validators/validators";
import {Button} from "../../../../Button/Button";
import {TextArea} from "../../../../TextArea/TextArea";

const ProfileFormData = (props: InjectedFormProps<UserProfile>) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.formData}>
            {props.error && <span> {props.error} </span>}
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
                               placeholder={'About me'}
                               required
                               validate={[required]}
                               component={TextArea}/>
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
                    style={{marginTop: 0}}
                    component={MUField}/>

            })}
            {props.error && props.touch() && <span> {props.error} </span>}
            <Button name={'Save'} className={s.saveBtn}/>
        </form>
    )
}


export const ProfileFormDataContainer = reduxForm< UserProfile >({
    form: 'profileFormData'
})(ProfileFormData)





