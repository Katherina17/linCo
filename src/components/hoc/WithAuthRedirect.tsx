import {Redirect} from "react-router-dom";
import {State} from "../../redux/redux-store";
import {connect} from "react-redux";
import {ComponentType} from "react";


export type mapStateToPropsForRedirect = {
    isAuth: boolean
}

export const mapStateToPropsForRedirect = (state:State):mapStateToPropsForRedirect => {
    return {isAuth: state.auth!.isAuth}
}

export function withAuthRedirect<T>(Component: ComponentType<T>){
   const RedirectComponent = (props: mapStateToPropsForRedirect) => {
       let {isAuth, ...restProps} = props;
       if(!isAuth){
           return <Redirect to={'/login'}/>
       }
       return <Component {...restProps as T}/>
   }
   return connect(mapStateToPropsForRedirect)(RedirectComponent)
}

