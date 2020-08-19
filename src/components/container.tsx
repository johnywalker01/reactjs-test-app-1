import React from 'react';
import './container.css';

export interface Props {

}

export interface State {

}

class Container extends React.Component<Props, State> {
    state = {
        count: 0,
    }

    render() {
        return (
            <div className="flx-1 flx-row div1">
                <div className="flx-1 flx-column div2" draggable='true'>

                </div>
            </div>
        );
    }

}

export default Container;