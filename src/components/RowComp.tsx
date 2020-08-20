import React from 'react';
import './RowComp.css';
import ResizeDivComp from './ResizeDiv';

export interface Props {
}

export interface State {

}

class RowComp extends React.Component<Props, State> {

    render() {
        return (
            <div className="flex-m1 row">
                <ResizeDivComp />
                <ResizeDivComp />
            </div>
        );
    }
}

export default RowComp;