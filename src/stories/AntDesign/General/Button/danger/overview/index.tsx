import React from 'react';

import { storiesOf } from '@storybook/react';
import ComponentExample from '../../../../../../components/ComponentExample';
import WhenToUse from '../../../../../../components/WhenToUse';
import SeeAlso from '../../../../../../components/SeeAlso';
// import test from 'text!./DangerButtonWithConfirmation';
import Example from './Example';
import Story from '../../../../../../components/Story';

import { linkTo } from '@storybook/addon-links';

const seeAlso = [
    {
        title: 'Ant Design Button Documentation',
        url: 'https://ant.design/components/button/'
    }
];

export default function() {
    storiesOf('Ant Design/General/Button/Danger', module).add(
        'Overview',
        () => {
            return (
                <Story title="Danger Button">
                    <ComponentExample>
                        <Example />
                    </ComponentExample>

                    <p>
                        The Danger button, although named with apparent consequence and seriousness, only differs from
                        the Default and Primary button by appearance; it is cast in a red hue indicating danger.
                    </p>

                    <WhenToUse>
                        <p>
                            The <em>danger button</em> should only be used when the action carried out by the button is
                            destructive in some way. A danger button may also be{' '}
                            <a
                                onClick={() => {
                                    linkTo('Ant Design/General/Button/Danger', 'With Confirmation');
                                }}
                            >
                                wrapped in a confirmation dialog
                            </a>{' '}
                            to prevent unintended deliterious consequences.
                        </p>
                    </WhenToUse>

                    <SeeAlso items={seeAlso} />
                </Story>
            );
        },
        { info: { inline: true } }
    );
}
