import React from 'react';
import './Usage.css';

interface ComponentExampleProps {
    title: string;
}

interface ComponentExampleState {}

export default class ComponentExample extends React.Component<ComponentExampleProps, ComponentExampleState> {
    render() {
        return (
            <div className="Usage">
                <h3>Usage: {this.props.title}</h3>
                {this.props.children}
            </div>
        );
    }
}
