import React from 'react';

const Card = ({title, label, subtitle, onClick, children, error}) => {
  return (
    <div className="card">
      <h5 className="card-header">{title}</h5>
      <div className="card-body">
        {
          error &&
          <div className="alert alert-danger">{error}</div>
        }
        <h5 className="card-title">{subtitle}</h5>
        {
          children &&
          children
        }
        {
          label &&
          <button onClick={onClick} className="btn btn-primary">{label}</button>
        }
      </div>
    </div>
  )
}

Card.defaultProps = {
  onClick: () => console.error('No onClick provided to ActionCard.js'),
}

export default Card;
