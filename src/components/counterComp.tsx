import React from 'react';
import './counter.css';

export interface ICounter {
    id?: number;
    value: number
}
export interface Props {
    onDelete?: any;
    onIncrement?: any;
    counter: ICounter;
}

export interface State {

}

class CounterComp extends React.Component<Props, State> {
    // state = {
    //     value: this.props.counter.value,
    // }
    // handleAddToCart = (opr: string) => {
    //     if (opr === '+')
    //         this.setState({ value: this.state.value + 1 });
    //     else if (opr === '-')
    //         this.setState({ value: this.state.value - 1 });

    // }
    render() {
        return (
            <div>
                <div className="flx-1">
                    <div className={this.getBadgeClasses()}>{this.formatCount()}</div>
                    <button onClick={() => this.props.onIncrement(this.props.counter)}>+</button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)}>&#9949;</button>
                </div>
                {/* <div>
                    <ul>
                        {this.renderTags()}
                    </ul>
                </div> */}
            </div >
        );
    }

    getBadgeClasses() {
        let classes = "badge "
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return (value === 0 ? 'Zero' : value);
    }
}

export default CounterComp;