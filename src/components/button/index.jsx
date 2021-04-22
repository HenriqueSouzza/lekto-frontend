import React from 'react';
import { Button } from 'antd';
import './index.css';

export default function ButtonCustom(props){
    return <Button {...props}>{props.name}</Button>
}