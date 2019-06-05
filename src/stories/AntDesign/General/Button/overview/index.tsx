import React from 'react';

import { storiesOf } from '@storybook/react';
import Story from '../../../../../components/Story';
import SimpleDefaultButton from '../default/simple';
import SimplePrimaryButton from '../primary/components/simple';
import SimpleDangerButton from '../danger/overview/Example';
import { Button } from 'antd';
import { linkTo } from '@storybook/addon-links';

export default function() {
    storiesOf('Ant Design/General/Button', module).add(
        'Overview',
        () => {
            return (
                <Story title="Button">
                    <p>Buttons are one of the primary components through which a user can express action.</p>
                    <p>Most buttons share these attributes: </p>
                    <ul>
                        <li>a border (making the roughly a box)</li>
                        <li>A color theme</li>
                        <li>a label</li>
                        <li>an action</li>
                    </ul>
                    <p>Other optional attributes of buttons include:</p>
                    <ul>
                        <li>Borderless</li>
                        <li>Disabled </li>
                    </ul>
                    <h3>Ant Design Buttons</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Button
                                        type="link"
                                        onClick={() => {
                                            linkTo('Ant Design/General/Button', 'Default')();
                                        }}
                                    >
                                        Default
                                    </Button>
                                </td>
                                <td>
                                    <SimpleDefaultButton />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {' '}
                                    <Button
                                        type="link"
                                        onClick={() => {
                                            linkTo('Ant Design/General/Button', 'Primary')();
                                        }}
                                    >
                                        Primary
                                    </Button>
                                </td>
                                <td>
                                    <SimplePrimaryButton />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {' '}
                                    <Button
                                        type="link"
                                        onClick={() => {
                                            linkTo('Ant Design/General/Button', 'Danger')();
                                        }}
                                    >
                                        Danger
                                    </Button>
                                </td>
                                <td>
                                    <SimpleDangerButton />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Story>
            );
        },
        {
            info: { inline: true },
            notes: {
                markdown: `
The default button should be used unless there is a reason to use a more expressive one.

#### Usage
                `
            }
        }
    );
}
