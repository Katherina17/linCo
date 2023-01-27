import React from "react";
import {EmptyObject, Store} from "redux";
import {commonActionTypes, DialogsType, ProfileType} from "./state";

type StoreContextType = {
    store: (Store<EmptyObject & {profile: ProfileType, dialogs: DialogsType}, commonActionTypes> | null); ReactNode: any;
}

export let StoreContext = React.createContext<Store<EmptyObject & {profile: ProfileType, dialogs: DialogsType}, commonActionTypes> | null>(null);
