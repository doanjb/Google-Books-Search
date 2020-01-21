import React from 'react';

export default function Book(props) {
  return (
    <div className='card mt-3 shadow-sm'>
      <div className='card-header bg-dark text-light d-inline'>
        <h6>{props.title}</h6>
      </div>
      <div className='row no-gutters' style={cardBody}>
        <div className='col-md-2'>
          {props.image ? <img src={props.image} style={imagestyle} className='pt-4' /> : <p></p>}
        </div>
        <div className='col-md-10 card-bg'>
          <div className='card-body'>
            <div className='btn-group w-100' role='group'>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={() => props.view(props.link)}>
                View
              </button>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={() =>
                  props.save(
                    props.bookId,
                    props.title,
                    props.authors,
                    props.description,
                    props.image,
                    props.link
                  )
                }>
                Save
              </button>
            </div>
          </div>
          <h5 className='card-title px-4'>Authors: {props.author}</h5>
          <p className='card-text px-4 pb-3'>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

const cardBody = {
  minHeight: '15rem'
};

const imagestyle = { display: 'block', margin: 'auto' };
