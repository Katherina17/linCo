import {compose} from "redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import React from "react";


const News = () => {
    return(
        <div>
            news
        </div>
    )
}

export default compose<React.ComponentType>(
    withAuthRedirect
)(News)