import {compose} from "redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import React from "react";


 const Settings = () => {
    return(
        <div>
            settings
        </div>
    )
}

export default compose<React.ComponentType>(
    withAuthRedirect
)(Settings)