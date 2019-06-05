import 'antd/dist/antd.css';

import Alert from './Alert/index';
import Drawer from './Drawer/index';
import Message from './Message/index';
import Modal from './Modal/index';
import Notification from './Notification/index';
import Popconfirm from './Popconfirm/index';
import Progress from './Progress/index';
import Skeleton from './Skeleton/index';
import Spin from './Spin/index';

export default function() {
    Alert();
    Drawer();
    Message();
    Modal();
    Notification();
    Popconfirm();
    Progress();
    Skeleton();
    Spin();
}
