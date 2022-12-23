import {DialogList, DialogsItems} from "./DialogList/DialogList";
import {Dialog} from "./Dialog/Dialog";
import s from './Dialogs.module.css';

export const Dialogs = () => {
    const dialogsItemsForChat: DialogsItems[] = [{
        id: 1,
        imgSrc: 'https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'Lana Wolf',
        message: "Hello, what's up?"
    },
        {
            id: 2,
            imgSrc: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            name: 'Enola Kit',
            message: "So delightful up dissimilar by unreserved it connection frequently. Do an high room so in paid. Up on cousin ye dinner should in."
        },
        {
            id: 3,
            imgSrc: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            name: 'Jeff Berton',
            message: "It allowance prevailed enjoyment in it. Calling observe for who pressed raising his. Can connection instrument astonished unaffected his motionless preference. "
        },
        {
            id: 4,
            imgSrc: 'https://images.unsplash.com/photo-1523224042829-4731dd15a3bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
            name: 'Ann Peter',
            message: "Started his hearted any civilly."
        }
    ];
    
    const dialogItemsForDialog = dialogsItemsForChat.map( d => {
        return(
            <Dialog name={d.name} imgSrc={d.imgSrc} message={d.message} />
        )
    })
    
    return(
        <div className={s.dialogs_container}>
            <DialogList dialogsItems={dialogsItemsForChat}/>

            {dialogItemsForDialog}
            
            {/*<Dialog dialogItems={dialogsItemsForChat}/>*/}
        </div>
    )
}