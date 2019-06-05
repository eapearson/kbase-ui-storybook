import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from 'antd';
import Story from '../../../../../components/Story';
import ComponentExample from '../../../../../components/ComponentExample';

export default function() {
    storiesOf('Ant Design/General/Button', module).add(
        'Link',
        () => {
            return (
                <Story title="Link Button">
                    <p>
                        The <em>link button</em> should be used when button should be de-emphasized more than the
                        default button. For example, if many buttons are to be repeated (e.g. a table, or set of cards,
                        etc.).
                    </p>

                    <ComponentExample>
                        <Button type="link">Link Button</Button>
                    </ComponentExample>

                    <h3>When to use link vs link button?</h3>
                    <p>
                        An anchor link should of course be used for invoking a url path. Sometimes this may be an
                        appropriate action for a button, but is rare.
                    </p>
                    <p>
                        An anchor link should be used within text. Link buttons will, by default, create extra space
                        around itself, so it does not fit in well inline with other text.
                    </p>
                    <p>
                        For standalone usage, where a link style is preferred, the Link Button should be used. It is
                        simpler, not requiring the usage of <code>preventDefault()</code>.
                    </p>
                </Story>
            );
        },
        { info: { inline: true } }
    );
}
