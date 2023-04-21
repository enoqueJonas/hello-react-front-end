export const GREETINGS_RETRIVIED = "hello-react-front-end/src/redux/greeting/GREETINGS_RETRIEVED"

const greetingsReducer = (state = "", action) => {
    {type, payload} = action
    switch(type){
        case `${GREETINGS_RETRIVIED}/fulfilled`:
            return{...state, message: payload}
        default:
            return state
    }
}

export default greetingsReducer;