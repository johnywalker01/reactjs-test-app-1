import React from './node_modules/react';
import './counters.css';
import CounterComp, { ICounter } from './counterComp';

export interface Props {

}

export interface State {

}

class CountersComp extends React.Component<Props, State> {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 3 },
            { id: 4, value: 0 }
        ]
    }
    handleDelete = (counterId: number) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    }
    handleIncrement = (counter: ICounter) => {
        console.log({ counter });
        const counterItem = this.state.counters.filter(c => c.id === counter.id);
        // counterItem.value = counterItem.value + 1;
        console.log({ counterItem });

        // this.setState({ counters });
        // const counters = this.state.counters.filter(c => c.id !== counterId);
        // this.setState({ counters });
    }
    render() {
        return (
            <div className="flx-c1">
                {this.state.counters.map(counter =>
                    <CounterComp
                        key={counter.id}
                        onDelete={() => this.handleDelete(counter.id)}
                        onIncrement={this.handleIncrement}
                        counter={counter}></CounterComp>
                )}
            </div>
        );
    }

}

export default CountersComp;