import React from "react";

import { connect } from "react-redux";

const SmurfVillage = props => {
  return (
    <div>
      {props.smurfs.map(item => (
        <div key={item.id}>
          <p>Name: {`${item.name} Smurf`}</p>
          <p>Age: {item.age}</p>
          <p>Height: {item.height}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, {})(SmurfVillage);
