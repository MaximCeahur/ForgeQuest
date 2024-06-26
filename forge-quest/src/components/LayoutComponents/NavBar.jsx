import React from 'react';

import { AppBar, Toolbar, Box, Link } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const textStyle = {
    color: 'white',
};

export default function NavBar() {
    return (
        <AppBar position= 'static' sx={{ backgroundColor: 'rgb(16,20,24)', padding: '0px', paddingLeft: '270px' }}
            style={{ height: 70, justifyContent: 'center' }}>
            <Toolbar sx={{ display: 'flex', textAlign: 'center', gap: '50px', justifyContent: 'space-between' }}>
                <Box>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', maxWidth: 400, backgroundColor: 'rgb(16,20,24)', border: '1px solid azure' }}
                    >
                        <InputBase
                            sx={{ ml: 2, flex: 1, color: 'azure' }}
                            placeholder="Search information"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px', color: 'rgb(105,113,115)' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Box>
                <div style={{ fontSize: '15px', padding: '10px', border: '1px solid azure', borderRadius: 5 }}>
                    Type <span style={{ color: 'green' }}> /site </span> in the server chat to get link to this page
                </div>
                <Box style={{ gap: 25 }} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <Link href="/signin" style={textStyle} sx={{ textDecoration: 'none' }}>
                            Login
                        </Link>
                    </Box>
                    <Box sx={{ border: '1px solid azure', borderRadius: '5px', p: '5px' }}>
                        <Link href="/signup" style={textStyle} sx={{ textDecoration: 'none' }}>
                            Register
                        </Link>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
