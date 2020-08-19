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
            <div className="row">
                <ResizeDivComp />
                <ResizeDivComp />
            </div>
        );
    }
}

export default RowComp;