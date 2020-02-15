import React from 'react';

const Event = props => {
  return (
    <div className="event-card row">
      <div>
      <h2 className="event-title" id={`${props.event.id}`}>{`${props.event.title}`} </h2>
      <div className="event-body">{`${props.event.body}`} </div>
      </div>
      
      <div className="image-block">
      <img className="event-image" src={`${"./images/" + props.event.image}`}/>
      </div>
         <br/>
         </div>
  );
};

export default Event;
