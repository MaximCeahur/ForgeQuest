import React from "react";
import NavBar from "../components/LayoutComponents/NavBar";
import LeftSidePanel from "../components/LayoutComponents/LeftSidePanel";
import { Stack, Box } from "@mui/material";
import DiamondPrivilege from "../components/PricingsComponents/DiamondPrivilege";



export default function Diamond() {
    return (
        <Stack direction="row" style={{ justifyContent: 'space-between' }}>
            <LeftSidePanel />
            <div className="vertical-divider"></div>
            <Box className="main-box" style={{ width: '100%' }}>
                <NavBar />
                <div className='line'></div>
                <DiamondPrivilege />
            </Box>
        </Stack>
    )
}