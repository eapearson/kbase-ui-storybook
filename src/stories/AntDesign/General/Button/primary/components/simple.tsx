import React from 'react';
import { Button } from 'antd';

interface Props {}

interface State {}

export default class SimplePrimaryButton extends React.Component<Props, State> {
    handleClick() {
        alert('Click from Primary Button has been handled!');
    }
    render() {
        return (
            <Button type="primary" onClick={this.handleClick.bind(this)}>
                Primary Button
            </Button>
        );
    }
}
