import {Redirect} from "react-router-dom";


export const RedirectFunc = (config:any) => (Component: any) => (props:any) => {
    const { redirectCondition, redirectTo } = config;

    if (redirectCondition(props)) {
        return <Redirect to={redirectTo}/>;
    }

    return <Component {...props} />;
};

