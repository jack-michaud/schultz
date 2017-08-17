import React, { Component } from 'react';
import { connect } from 'react-redux';

import { throwError } from '../actions';

class Error extends Component {

    throwError() {
        this.props.throwError("test");
    }

    render() {
        return (
            <div className={"error"}>
                {this.props.errors ? this.props.errors : null}
                <button onClick={this.throwError.bind(this)}>Err</button>
            </div>
        )
    }
}

const connectProps = (state) => ({
    "errors": state.errors,
});

const mapActions = (dispatch) => ({
    "throwError": (msg) => dispatch(throwError(msg)),
});

export default connect(connectProps, mapActions)(Error);