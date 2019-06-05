import * as React from 'react';

export interface SeeAlsoItem {
    url: string;
    title: string;
}

interface Props {
    items: Array<SeeAlsoItem>;
}

interface State {}

export default class SeeAlso extends React.Component<Props, State> {
    renderItems() {
        return this.props.items.map((item) => {
            return (
                <li>
                    <a href={item.url} target="_blank">
                        {item.title}
                    </a>
                </li>
            );
        });
    }

    render() {
        return (
            <div className="SeeAlso">
                <h3>See Also</h3>
                <ul>{this.renderItems()}</ul>
            </div>
        );
    }
}
