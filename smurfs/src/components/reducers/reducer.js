const initialValue = {
  message: "",
  smurfs: []
};

export const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FETCHING":
      return {
        message: action.payload
      };
    case "FETCHED_DATA":
      return { ...state, smurfs: action.payload };

    case "NO_DATA": {
      return { ...state, message: action.payload };
    }
    case "ADDING":
      return { ...state, message: action.payload };
    case "SMURF_ADDED":
      return { message: "Smurf added", smurfs: action.payload };
    case "ADDING_PROBLEM":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
