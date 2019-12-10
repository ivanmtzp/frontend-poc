import React, {Component} from "react";
import Link from 'next/link';


export default class LinkCellRenderer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        }
    }

    // noinspection JSUnusedGlobalSymbols
    refresh(params) {
        if(params.value !== this.state.value) {
            this.setState({
                value: params.value
            })
        }
        return true;
    }

    render() {
        return (            
            <Link href='/calibration'><a target="_blank">{this.state.value}</a></Link>            
        );
    }
};