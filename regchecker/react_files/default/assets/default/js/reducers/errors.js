
export const errors = (state = {}, action) => {

	switch (action.type) {

	case "ERROR": 
		return {"error": action.message};

	default: return state;
	}
}