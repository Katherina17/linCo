import {compose} from "redux";
import React from "react";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";


 const Music = () => {
    return(
        <div>
            music
        </div>
    )
}

export default compose<React.ComponentType>(
    withAuthRedirect
)(Music)