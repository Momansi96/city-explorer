import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

export class AlertBox extends Component {
    render() {
        return (
            <div>
                {this.props.alert &&
                <Alert variant= {'danger'}>
                  {this.props.error}
                </Alert>
                }
            </div>
        )
    }
}

export default Alert
