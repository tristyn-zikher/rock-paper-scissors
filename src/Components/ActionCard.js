import React from 'react';
import PropTypes from 'prop-types'

// Requires title,
// requires onClick function
// requires 'label' which is the label for the 'onClick' button.

const Card = ({title, label, subtitle, onClick, children}) => {
  return (
    <div className="card">
      <h5 className="card-header">{title}</h5>
      <div className="card-body">
        <h5 className="card-title">{subtitle}</h5>
        {
          children &&
          children
        }
        <button onClick={onClick} className="btn btn-primary">{label}</button>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

Card.defaultProps = {
  title: '',
  label: '',
  subtitle: '',
  onClick: () => console.error('No onClick provided to ActionCard.js'),
}

export default Card;
