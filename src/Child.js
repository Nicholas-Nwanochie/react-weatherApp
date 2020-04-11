import React from "react";



const Child = props => {

  return (
    <>
      i am a kid named {props.name}
      <hr></hr>i am {props.age} yours old
      <hr></hr>
      And i like to {props.activity}
      <hr></hr>
      here is my photo
      <img src={props.photo}></img>
    </>
  );
}

export default Child;
