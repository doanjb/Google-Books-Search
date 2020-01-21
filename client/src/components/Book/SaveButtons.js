import React from 'react';

export default function SaveButtons(props) {
  return (
    <React.Fragment>
      <button type='button' className='btn btn-secondary' onClick={() => props.view(props.link)}>
        View
      </button>
      <button
        type='button'
        className='btn btn-secondary'
        onClick={() =>
          props.save(
            props.bookId,
            props.title,
            props.author,
            props.description,
            props.image,
            props.link
          )
        }>
        Save
      </button>
    </React.Fragment>
  );
}
