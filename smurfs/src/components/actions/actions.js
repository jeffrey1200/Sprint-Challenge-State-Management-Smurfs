import Axios from "axios";

export const getSmurf = () => dispatch => {
  dispatch({ type: "FETCHING_DATA", payload: "Waking up a smurfs" });
  Axios.get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: "FETCHED_DATA", payload: res.data });
    })
    .catch(error =>
      dispatch({ type: "NO_DATA", payload: "Oops something went wrong!" })
    );
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: "ADDING", payload: "Adding to the village" });

  Axios.post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({ type: "SMURF_ADDED", payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: "ADDING_PROBLEM",
        payload: err
      });
    });
};
