import React from 'react';

export default function Book(props) {
  return (
    <div className='card mt-3 shadow-sm'>
      <div className='card-header bg-dark text-light d-inline'>
        <h6>{props.title}</h6>
      </div>
      <div className='row no-gutters' style={cardBody}>
        <div className='col-md-2'>
          <img src={props.image} style={imagestyle} className='pt-4' />
        </div>
        <div className='col-md-10 card-bg'>
          <div className='card-body'>
            <h5 className='card-title'>Authors: {props.author}</h5>
            <p className='card-text overflow-auto'>{props.description}</p>
            <a className='card-link p-2 my-2' href={props.link}>
              Source
            </a>
            <button
              className='btn btn-dark p-2 my-2 d-block'
              style={buttonStyleLeft}
              onClick={props.view}>
              View
            </button>
            <button
              className='btn btn-dark p-2 my-2 d-block'
              style={buttonStyleRight}
              onClick={props.view}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardBody = {
  minHeight: '20rem'
};

const imagestyle = { display: 'block', margin: 'auto' };

const buttonStyleLeft = {
  bottom: '0',
  position: 'absolute',
  width: '45%'
};

const buttonStyleRight = {
  bottom: '0',
  position: 'absolute',
  width: '45%',
  right: '10px'
};
