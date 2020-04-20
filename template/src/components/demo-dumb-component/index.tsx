import React from 'react';
import styled from 'styled-components';

type Props = {
    text: string
}

const Text = styled.p`
    color: ${props => props.theme.textColor}
`


export default function DemoDumpComponent({text}: Props) {
    return (
        <Text>{text}</Text>
    )
}
