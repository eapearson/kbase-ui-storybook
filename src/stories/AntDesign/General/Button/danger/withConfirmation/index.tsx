import React from 'react';

import { storiesOf } from '@storybook/react';
import CodeExample from '../../../../../../components/CodeExample';
import SeeAlso from '../../../../../../components/SeeAlso';
import DangerButtonWithConfirmation from './Example';
import notes from './notes.md';
import Story from '../../../../../../components/Story';

const exampleText = `
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
`;

const seeAlso = [
    {
        title: 'Ant Design Button Documentation',
        url: 'https://ant.design/components/button/'
    },
    {
        title: 'Ant Design Popconfirm Documentation',
        url: 'https://ant.design/components/popconfirm/'
    }
];

export default function() {
    storiesOf('Ant Design/General/Button/Danger', module).add(
        'With Confirmation',
        () => {
            return (
                <Story title="Danger Button with Confirmation">
                    <p>
                        A dangerous button often needs confirmation before the associated action is carried out. Very
                        seldom can such actions be undone without significant back end admin work. Ant Design offers two
                        ways of accomplishing this. The simplest is presented here -- the <code>Popconfirm</code>{' '}
                        component.
                    </p>
                    <DangerButtonWithConfirmation />

                    <CodeExample language="jsx" code={exampleText} width="auto" />

                    <SeeAlso items={seeAlso} />
                </Story>
            );
        },
        { info: { inline: true }, notes }
    );
}
