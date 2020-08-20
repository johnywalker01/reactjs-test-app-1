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
                <div className="resizable" onDragEnd={this.stopDrag}>
                    <div className="resizer" onMouseDown={this.initResize}></div>
                    <div className="dragger" onMouseDown={this.initDarg}></div>
                </div>
            </React.Fragment >
        );
    }

    initDarg = (e: any) => {
        this.parentDiv = e.target.parentNode;
        // enable the draggable attribute
        this.parentDiv.setAttribute('draggable', true);
    }

    stopDrag = (e: any) => {
        // disable the draggable attribute
        this.parentDiv.setAttribute('draggable', false);
    }

    initResize = (e: any) => {
        this.parentDiv = e.target.parentNode;
        this.parentDiv.setAttribute('draggable', false);
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.startWidth = parseInt(this.parentDiv.clientWidth, 10);
        this.startHeight = parseInt(this.parentDiv.clientHeight, 10);


        document.documentElement.addEventListener('mousemove', this.doResize, false);
        document.documentElement.addEventListener('mouseup', this.stopResize, false);
    }

    doResize = (e: any) => {
        let width = (this.startWidth + e.clientX - this.startX);
        let height = (this.startHeight + e.clientY - this.startY);
        if (width > 40 && height > 20) {
            this.parentDiv.style.width = (width) + 'px';
            this.parentDiv.style.height = (height) + 'px';
        }
    }

    stopResize = (e: any) => {
        document.documentElement.removeEventListener('mousemove', this.doResize, false);
        document.documentElement.removeEventListener('mouseup', this.stopResize, false);

        // disable the draggable attribute ; just in case
        this.parentDiv.setAttribute('draggable', false);
    }
}

export default ResizeDivComp;