import React from 'react';
import useNow from '../../modules/main/hooks/use-now';

import * as dayjs from 'dayjs'


export default function HomePage() {

    const {now} = useNow();

    return (
        <h1>Home {dayjs(now).format()}</h1>
    )
}
