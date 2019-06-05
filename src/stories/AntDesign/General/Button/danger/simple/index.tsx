import React from 'react';

import { storiesOf } from '@storybook/react';
import CodeExample from '../../../../../../components/CodeExample';
import SeeAlso from '../../../../../../components/SeeAlso';
import SimpleDangerButton from './Example';
import Story from '../../../../../../components/Story';

// import test from 'text!./DangerButtonWithConfirmation';

// Note: copy and paste from `simple.tsx`
const simple = `
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
`;

const seeAlso = [
    {
        title: 'Ant Design Button Documentation',
        url: 'https://ant.design/components/button/'
    }
];

export default function() {
    storiesOf('Ant Design/General/Button/Danger', module).add(
        'Simple',
        () => {
            return (
                <Story title="Simple Danger Button">
                    <SimpleDangerButton />
                    <CodeExample language="jsx" code={simple} width="auto" />
                    <SeeAlso items={seeAlso} />
                </Story>
            );
        },
        { info: { inline: true } }
    );
}
