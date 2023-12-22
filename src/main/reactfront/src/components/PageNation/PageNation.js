import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination() {
    return (
        <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center', maxHeight: '1500px' }}>
            <Stack spacing={2}>
                <Pagination count={10} color="secondary" variant="outlined" size="large"/>
            </Stack>
        </div>
    );
}