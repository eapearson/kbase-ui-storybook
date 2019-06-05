import React from 'react';
import { storiesOf } from '@storybook/react';

import ComponentExample from '../../../../../components/ComponentExample';
import WhenToUse from '../../../../../components/WhenToUse';
import Usage from '../../../../../components/Usage';
import CodeExample from '../../../../../components/CodeExample';
import SimpleDefaultButton from './simple';
import SimplestDefaultButton from './simplest';
import SeeAlso from '../../../../../components/SeeAlso';

import notes from './default.notes.md';
import { Button } from 'antd';
import { linkTo } from '@storybook/addon-links';

const simple = `
import * as React from 'react';
import { Button } from 'antd';

const SimpleDefaultButton = () => {
    return <Button type="default">Default Button</Button>;
};

export default SimpleDefaultButton;
`;

const simplest = `
import * as React from 'react';
import { Button } from 'antd';

const SimplestDefaultButton = () => {
    return <Button>Default Button</Button>;
};

export default SimplestDefaultButton;
`;

const seeAlso = [
    {
        title: 'Ant Design Button Documentation',
        url: 'https://ant.design/components/button/'
    }
];

export default function() {
    storiesOf('Ant Design/General/Button', module).add(
        'Default',
        () => {
            return (
                <div className="storyWrapper">
                    <h2>Default Button</h2>
                    <ComponentExample>
                        <SimpleDefaultButton />
                    </ComponentExample>
                    <p>
                        The <em>default button</em> is subdued in order to avoid drawing attention from more important
                        components. The meaning of the button should be evident from the label and/or icon, in contrast
                        to{' '}
                        <a
                            onClick={(e: React.MouseEvent) => {
                                e.preventDefault();
                                linkTo('Ant Design/General/Button', 'Danger')();
                            }}
                        >
                            danger
                        </a>{' '}
                        or{' '}
                        <a
                            onClick={(e: React.MouseEvent) => {
                                e.preventDefault();
                                linkTo('Ant Design/General/Button', 'Primary')();
                            }}
                        >
                            primary
                        </a>{' '}
                        buttons which have some semantic meaning.{' '}
                    </p>
                    <WhenToUse>Use this button when the action is not the primary choice</WhenToUse>
                    <Usage title="Simple Usage">
                        <CodeExample language="jsx" code={simple} />
                        <SimpleDefaultButton />
                    </Usage>
                    <Usage title="Using default type">
                        <p>
                            The default behavior of Button, is to use the default button type. In this example we don't
                            provide a type for the button, because it defaults to <code>"default"</code>.
                        </p>
                        <CodeExample language="jsx" code={simplest} />
                        <SimplestDefaultButton />
                    </Usage>

                    <SeeAlso items={seeAlso} />
                </div>
            );
        },
        {
            info: { inline: true },
            notes: {
                markdown: notes
            }
        }
    );
}
