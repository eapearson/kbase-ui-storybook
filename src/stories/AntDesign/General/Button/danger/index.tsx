import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from 'antd';
// import test from 'text!./DangerButtonWithConfirmation';
import OverviewStory from './overview/index';
import SimpleStory from './simple/index';
import WithConfirmationStory from './withConfirmation/index';

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
    OverviewStory();
    SimpleStory();
    WithConfirmationStory();
}
