import * as React from 'react';
import { Button } from 'antd';

interface Props {}

interface State {}

export default class SimpleDangerButton extends React.Component<Props, State> {
    handleOnClick() {
        window.alert('Clicked the button!');
    }

    render() {
        return (
            <Button type="danger" onClick={this.handleOnClick.bind(this)}>
                Danger Button
            </Button>
        );
    }
}
