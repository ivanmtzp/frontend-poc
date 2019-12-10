import React, {Component} from "react";
import Link from 'next/link';
import moment from 'moment';


export default class TimestampLinkCellRenderer extends Component {
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
            <Link href='/calibration'><a target="_blank">{moment(new Date(this.state.value)).format('MMMM Do YYYY, h:mm:ss a')}</a></Link>            
        );
    }
};