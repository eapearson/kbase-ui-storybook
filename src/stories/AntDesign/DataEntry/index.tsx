import 'antd/dist/antd.css';

import AutoComplete from './AutoComplete/index';
import Checkbox from './Checkbox/index';
import DatePicker from './DatePicker/index';
import Form from './Form/index';
import Input from './Input/index';
import InputNumber from './InputNumber/index';
import Radio from './Radio/index';
import Select from './Select/index';
import Slider from './Slider/index';
import Switch from './Switch/index';
import TimePicker from './TimePicker/index';
import TreeSelect from './TreeSelect/index';
import Upload from './Upload/index';

export default function() {
    AutoComplete();
    Checkbox();
    DatePicker();
    Form();
    Input();
    InputNumber();
    Radio();
    Select();
    Slider();
    Switch();
    TimePicker();
    TreeSelect();
    Upload();
}
