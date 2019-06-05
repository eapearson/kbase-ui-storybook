import React from 'react';
import { Button } from 'antd';

interface Props {}

interface State {}

export default class SimpleDefaultButton extends React.Component<Props, State> {
    handleClick() {
        alert('click has been handled!');
    }
    render() {
        return <Button onClick={this.handleClick.bind(this)}>Simplest Default Button</Button>;
    }
}
