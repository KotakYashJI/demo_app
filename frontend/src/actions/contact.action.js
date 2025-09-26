import { loadcontacts } from "../slices/contact.slice"

export const addcontact = (data) => async (dispatch) => {
    await dispatch(loadcontacts(data))
}