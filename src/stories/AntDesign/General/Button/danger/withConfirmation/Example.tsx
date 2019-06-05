import * as React from 'react';
import { Button, Popconfirm } from 'antd';

interface Props {}

interface State {}

export default class DangerButtonWithConfirmation extends React.Component<Props, State> {
    handleOnCancel() {
        window.alert('ok, I will not do that thing you asked me to do.');
    }

    handleOnConfirm() {
        window.alert('ok, I WILL go ahead and do the thing you asked me to do originally.');
    }

    render() {
        return (
            <Popconfirm
                title="Are you sure you want to do this?"
                okText="Yes"
                cancelText="No"
                onCancel={this.handleOnCancel.bind(this)}
                onConfirm={this.handleOnConfirm.bind(this)}
            >
                <Button type="danger">Danger Button with Confirmation</Button>
            </Popconfirm>
        );
    }
}
