import React from 'react';
import useText from '../../modules/demo/hooks/use-text';
import DemoDumpComponent from '../demo-dumb-component';

export default function DemoSmartComponent() {
    const {text} = useText();

    return (
        <DemoDumpComponent text={text} />
    )
}
