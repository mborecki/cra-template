import React from 'react';
import useNow from '../../modules/main/hooks/use-now';

import dayjs from 'dayjs'


export default function HomePage() {

    const {now} = useNow();

    return (
        <h1>Home {dayjs(now).format()}</h1>
    )
}
