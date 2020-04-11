import React from 'react'

const Card = (props) => {
    console.log(props.children)
  return (
    <div className="ui card">
          <div className="content">{props.children}</div>
          <div className="extra content"> </div>
          <div className="ui two buttons"> </div>
          <div className="ui basic green button">Appprove </div>
          <div className="ui basic red button">Reject </div>

         
          
    </div>
    // <div className="ui placeholder segment">{props.children}</div>
  )
}

export default Card
