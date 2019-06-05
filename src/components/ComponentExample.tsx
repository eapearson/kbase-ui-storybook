import React from 'react';
import './ComponentExample.css';

interface ComponentExampleProps {}

interface ComponentExampleState {}

export default class ComponentExample extends React.Component<ComponentExampleProps, ComponentExampleState> {
    render() {
        return <div className="ComponentExample">{this.props.children}</div>;
    }
}
