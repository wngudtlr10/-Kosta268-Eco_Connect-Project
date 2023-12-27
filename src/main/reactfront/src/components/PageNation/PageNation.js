import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {Link} from "react-router-dom";

export default function BasicPagination() {
    return (
        <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center', marginTop: "120px", marginBottom: '80px' }}>
            <Stack spacing={2}>
                <Pagination count={10} color="secondary" variant="outlined" size="large"/>
            </Stack>
            <Link to={`/funding/write`}>
                <button className="donate-button"
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginInline: '25%',
                            marginBottom: '25px',
                            marginLeft: '800px',
                            maxWidth: '400px',
                            fontWeight: 'bold',
                            width: '150px',
                            backgroundColor: 'blue'
                        }}>
                    작성하기
                </button>
            </Link>
        </div>
    );
}
