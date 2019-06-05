import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button, Icon } from 'antd';

export default function() {
    storiesOf('Ant Design/General/Button', module).add(
        'With Icon',
        () => {
            return (
                <div className="storyWrapper">
                    <h3>Button with Icon</h3>
                    <div className="componentExample">
                        <Button icon="pie-chart">Icon Button</Button>
                    </div>
                    <h4>Usage</h4>
                    <p>
                        Any type of button may be rendered with an icon. This feature comes in two flavors: icon as prop
                        and icon as component.
                    </p>

                    <h4>Icon via Props</h4>
                    <p>
                        The easiest way to add an icon to a Button is by specifying the id of the icon as a prop named
                        <code>icon</code>:
                    </p>

                    <code className="-block">{'<Button icon="pie-chart">Icon Button</Button>'}</code>

                    <div className="componentExample">
                        <Button icon="pie-chart">Icon Button</Button>
                    </div>

                    <h4>Icon via Component</h4>
                    <p>
                        Although dead easy, the props method is limited in how you use icons within a button. For such
                        times, you may just embed an icon in the button.
                    </p>

                    <code className="-block">{'<Button><Icon type="pie-chart" />Icon Button</Button>'}</code>

                    <div className="componentExample">
                        <Button>
                            <Icon type="pie-chart" />
                            Icon Button
                        </Button>
                    </div>
                </div>
            );
        },
        { info: { inline: true } }
    );
}
