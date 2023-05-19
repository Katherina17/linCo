import {Dispatch} from "redux";
import axios, {AxiosError} from "axios";
import {setError, setStatus} from "redux/appReducer";


export const handleServerNetworkError = (e: unknown, dispatch: Dispatch) => {
    const err = e as Error | AxiosError<{ error: string }>
    if (axios.isAxiosError(err)) {
        const error = err.message ? err.message : 'Some error occurred'
        dispatch(setError(error))
        console.log(err)
    } else {
        console.log(err)
        dispatch(setError( `Native error ${err.message}`))
    }
    dispatch(setStatus('failed'))
}