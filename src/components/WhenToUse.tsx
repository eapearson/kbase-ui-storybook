import React from 'react';
import './WhenToUse.css';

interface ComponentExampleProps {}

interface ComponentExampleState {}

export default class ComponentExample extends React.Component<ComponentExampleProps, ComponentExampleState> {
    render() {
        return (
            <div className="WhenToUse">
                <h3>When To Use</h3>
                {this.props.children}
            </div>
        );
    }
}
