import React from 'react';
import './ResizeDiv.css';

export interface Props {
}

export interface State {
}

class ResizeDivComp extends React.Component<Props, State> {
    startX = 0;
    startY = 0;
    startWidth = 0;
    startHeight = 0;
    parentDiv: any;
    render() {
        return (
            <React.Fragment>
                <div className="resizable" draggable>
                    <div className="resizer" onMouseDown={this.initDrag}></div>
                </div>
            </React.Fragment >
        );
    }

    initDrag = (e: any) => {
        this.parentDiv = e.target.parentNode;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.startWidth = parseInt(this.parentDiv.clientWidth, 10);
        this.startHeight = parseInt(this.parentDiv.clientHeight, 10);


        document.documentElement.addEventListener('mousemove', this.doDrag, false);
        document.documentElement.addEventListener('mouseup', this.stopDrag, false);
    }

    doDrag = (e: any) => {
        let width = (this.startWidth + e.clientX - this.startX);
        let height = (this.startHeight + e.clientY - this.startY);
        this.parentDiv.style.width = (width) + 'px';
        this.parentDiv.style.height = (height) + 'px';

        // disable the draggable attribute
        this.parentDiv.setAttribute('draggable', false);
    }

    stopDrag = (e: any) => {
        // console.log('stopDrag');
        document.documentElement.removeEventListener('mousemove', this.doDrag, false);
        document.documentElement.removeEventListener('mouseup', this.stopDrag, false);

        // enable the draggable attribute
        this.parentDiv.setAttribute('draggable', true);
    }
}

export default ResizeDivComp;