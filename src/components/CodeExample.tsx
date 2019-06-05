import React from 'react';

import * as highlight from 'highlight.js';
import 'highlight.js/styles/rainbow.css';

import './CodeExample.css';

interface CodeExampleProps {
    language: string;
    code: string;
    width?: string;
}

interface CodeExampleState {}

export default class CodeExample extends React.Component<CodeExampleProps, CodeExampleState> {
    codeNode: React.RefObject<HTMLDivElement>;
    constructor(params: CodeExampleProps) {
        super(params);
        this.codeNode = React.createRef();
    }
    componentDidMount() {
        if (!this.codeNode.current) {
            return;
        }
        const highlightedCode = highlight.highlight(this.props.language, this.props.code);
        this.codeNode.current.innerHTML = highlightedCode.value;
    }
    render() {
        const style: React.CSSProperties = {};
        if (this.props.width) {
            style.width = this.props.width;
        }
        return <div className="CodeExample" ref={this.codeNode} style={style} />;
    }
}
