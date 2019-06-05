import React from 'react';
import './Story.css';

interface ComponentExampleProps {
    title: string;
}

interface ComponentExampleState {}

export default class Story extends React.Component<ComponentExampleProps, ComponentExampleState> {
    render() {
        return (
            <div className="Story">
                <h2>{this.props.title}</h2>
                {this.props.children}
            </div>
        );
    }
}
