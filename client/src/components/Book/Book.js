import React from 'react';
import SearchButtons from './SearchButtons';
import SaveButtons from './SaveButtons';

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
              {props.type === 'search' ? (
                <SearchButtons
                  link={props.link}
                  bookId={props.bookId}
                  title={props.title}
                  author={props.title}
                  description={props.description}
                  image={props.image}
                  link={props.link}
                  view={props.view}
                  save={props.save}
                />
              ) : (
                <SaveButtons
                  link={props.link}
                  bookId={props.bookId}
                  title={props.title}
                  author={props.title}
                  description={props.description}
                  image={props.image}
                  link={props.link}
                  view={props.view}
                  delete={props.delete}
                />
              )}
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
