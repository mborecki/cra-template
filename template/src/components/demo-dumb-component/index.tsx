import React from 'react';

type Props = {
    text: string
}

export default function DemoDumpComponent({text}: Props) {
    return (
        <p>{text}</p>
    )
}
