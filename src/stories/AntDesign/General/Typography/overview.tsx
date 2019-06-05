import React from 'react';

import { storiesOf } from '@storybook/react';

export default function() {
    storiesOf('Ant Design/General/Typography', module).add('Overview', () => {
        return (
            <div className="storyWrapper">
                <h3>Typography</h3>
            </div>
        );
    });
}
