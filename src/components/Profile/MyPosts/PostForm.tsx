import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type PostFormDataType = {
    post: string

}

export const PostForm = (props: InjectedFormProps<PostFormDataType>) => {
    return <form onSubmit={props.handleSubmit}>
            <Field placeholder={'write a new post'} name={'post'} component={'textarea'}/>
        <button onSubmit={props.handleSubmit}>Add Post</button>
        </form>
}


export const PostFormContainer = reduxForm<PostFormDataType>({
    form: 'postForm'
})(PostForm)