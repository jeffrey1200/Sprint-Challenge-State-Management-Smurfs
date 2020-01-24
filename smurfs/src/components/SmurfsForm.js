import React, { useState } from "react";
import { addSmurf } from "./actions/actions";
import { connect } from "react-redux";

const SmurfsForm = props => {
  const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });

  const changeHandler = e => {
    const { name, value } = e.target;
    setSmurf({ ...smurf, [name]: value });
  };

  const submitHandler = e => {
    e.preventDefault();
    props.addSmurf(smurf);
    setSmurf({ name: "", age: "", height: "" });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name"> Name: </label>
          <input
            onChange={changeHandler}
            name="name"
            type="text"
            placeholder="Type Name"
            value={smurf.name}
          />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input
            onChange={changeHandler}
            name="age"
            type="text"
            placeholder="Type Age"
            value={smurf.age}
          />
        </div>
        <div>
          <label htmlFor="height">Height: </label>
          <input
            onChange={changeHandler}
            name="height"
            type="text"
            placeholder="Type Height"
            value={smurf.height}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { addSmurf })(SmurfsForm);
