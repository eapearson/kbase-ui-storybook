import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from 'antd';
import SimplePrimaryButton from './components/simple';

export default function() {
    storiesOf('Ant Design/General/Button', module).add(
        'Primary',
        () => {
            return (
                <div className="storyWrapper">
                    <h3>Primary Button </h3>
                    <p>
                        The <em>primary button</em> is meant to convey the main action in the focused view. There should
                        not be more than one primary button.
                    </p>
                    <SimplePrimaryButton />
                </div>
            );
        },
        { info: { inline: true } }
    );
}
