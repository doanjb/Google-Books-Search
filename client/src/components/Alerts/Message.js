import React, { Component } from 'react';

export default class Alert extends Component {
  state = {
    display: true
  };

  handleClick = () => {
    this.setState({ display: false });
    this.props.resetMessage();
  };

  render() {
    return (
      <div>
        {this.state.display && (
          <div className={`alert alert-${this.props.alert} alert-dismissible`}>
            {this.props.message}
            <button
              type='button'
              className='close'
              onClick={this.handleClick}
              data-dismiss='alert'
              aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
        )}
      </div>
    );
  }
}
