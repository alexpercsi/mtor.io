import React from 'react';
import PropTypes from 'prop-types';

const MentorCard = props => {
  return (
    <div className="mentor-card" style={props.style}>
      <div>
        <img src={props.image} alt={props.name} title={props.name} />
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

MentorCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  style: PropTypes.object
};

export default MentorCard;