import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';

export default function BasicGauges() {
    return (
        <Stack
            direction={{ xs: 'column', md: 'row' }}
            width={500}
            spacing={{ xs: 1, md: 3 }}>
            {/* <Gauge width={100} height={100} value={60} /> */}
            <Gauge
                //   width={100} 
                height={100} value={60} startAngle={-90} endAngle={90} />
        </Stack>
    );
}
