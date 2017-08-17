
export const errors = (state = null, action) => {

    switch (action.type) {

    case "ERROR": 
        return action.message;

    default: return state;
    }
}