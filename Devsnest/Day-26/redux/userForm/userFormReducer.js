import { updateFirstName, updateLastName} from "./userFormActionTypes";
const initialState ={
    firstName: '',
    lastName: ''
}
export const userFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case updateFirstName:
            return {
                ...state,
                firstName: action.payload,
            }
        case updateLastName:
            return {
                ...state,
                lastName: action.payload,
            }
        default:
            return state;
    }
}