import React from "react";
import NavBar from "../components/LayoutComponents/NavBar";
import LeftSidePanel from "../components/LayoutComponents/LeftSidePanel";
import { Stack, Box } from "@mui/material";
import ProfileMP from "../components/ProfileComponents/ProfileMP";

export default function Profile() {
    return (
        <Stack direction="row" style={{ justifyContent: 'space-between' }}>
            <LeftSidePanel />
            <div className="vertical-divider"></div>
            <Box className="main-box" style={{ width: '100%', padding: '0px'}}>
                <NavBar />
                <div className='line'></div>
                <div style={{ paddingLeft: '266px', maxWidth: '1200px', margin: 'auto', paddingRight: '16px' }}>
                    <ProfileMP />
                </div>
            </Box>
        </Stack>
    )
}