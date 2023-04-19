import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {MUField} from "../../../../Authorization/MUField";
import * as React from "react";
import {UserProfile} from "../../../../../redux/profileReducer";


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
        <form onSubmit={props.handleSubmit}>
            <button> Save </button>
          <div> FullName: <Field
                               name='fullName'
                               type={'text'}
                               label="change FullName"
                               variant="standard"
                               component={MUField}/>
          </div>
            <div> About Me: <Field
                               name='aboutMe'
                               type={'text'}
                               label="about Me"
                               variant="standard"
                               component={MUField}/>
          </div>
         <div> Are you looking for a job? <Field name='lookingForAJob'
                type={'checkbox'}
                variant="standard"
                label={'looking for a job'}
                component={'input'}
                />
         </div>
            <div> The job description: <Field
                name='lookingForAJobDescription'
                type={'text'}
                label="The job description"
                variant="standard"
                component={MUField}/>
            </div>
            <div> GitHub: <Field
                name='contacts.github'
                type={'text'}
                label="github"
                variant="standard"
                component={MUField}/>
            </div>
            <div> Facebook: <Field
                name='contacts.facebook'
                type={'text'}
                label="facebook"
                variant="standard"
                component={MUField}/>
            </div>
            <div> Insta: <Field
                name='contacts.insta'
                type={'text'}
                label="insta"
                variant="standard"
                component={MUField}/>
            </div>
            <div> Vk: <Field
                name='contacts.vk'
                type={'text'}
                label="vk"
                variant="standard"
                component={MUField}/>
            </div>

        </form>
    )
}


export const ProfileFormDataContainer = reduxForm< UserProfile >({
    form: 'profileFormData'
})(ProfileFormData)