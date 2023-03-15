import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {TextArea} from "../../TextArea/TextArea";
import s from './MyPosts.module.css';



export type PostFormDataType = {
    post: string

}

const maxLength150 = maxLength(150)


export const PostForm = (props: InjectedFormProps<PostFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.textAreaForm}>
            <Field placeholder={'write a new post'} name={'post'} component={TextArea} validate={[required,maxLength150]}/>
        <button onSubmit={props.handleSubmit}>Add Post</button>
        </form>
    )
}


export const PostFormContainer = reduxForm<PostFormDataType>({
    form: 'postForm'
})(PostForm)


