import React from 'react'

const Spinner = (props) => {
  return (
    <>
<div className="ui active dimmer">
  <div className="ui big text loader"> {props.message}</div> 
   
   
</div> 
    </>
  )
}
Spinner.defaultProps = {
    message: "Loading..."
};
export default Spinner




import React, { Component } from 'react'

class Userform extends Component {
  render() {
      return (
          <form>
              <label>Enter a username:</label>
              <input />
          </form>
      );
  }
}

export default Userform
