import React, {Component} from "react";
import Link from 'next/link';
import {Checkbox} from "antd";


export default class CheckboxLinkCellRenderer extends Component {
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
        let checkbox = <Link href="/calibration"><a target="_blank">without batch</a></Link>;
        if (this.state.value == 'true') {
            checkbox = <Checkbox defaultChecked={true} disabled><Link href='/calibration'><a target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></Link></Checkbox>;      
        } else if (this.state.value == 'false') {
            checkbox = <Checkbox defaultChecked={false} disabled><Link href='/calibration'><a target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></Link></Checkbox>;      
        }
        return (
            checkbox  
        );
    }
};

