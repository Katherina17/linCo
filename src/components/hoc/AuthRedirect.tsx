import {Redirect} from "react-router-dom";
import {State} from "../../redux/redux-store";

type mapStateToPropsForRedirect = {
    isAuth: boolean
}


export const AuthRedirect = (props: any) =>{
   const RedirectComponent = (props: any) => {
       if(!props.isAuth){
           return <Redirect to={'/login'}/>
       }
       return <props.Component {...props}/>
   }
    return RedirectComponent;
};

