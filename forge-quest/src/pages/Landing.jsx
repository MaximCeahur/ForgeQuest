import React from "react";
import MainPage from "../components/LandingComponents/MainPage";
import NavBar from "../components/LayoutComponents/NavBar";
import Description from "../components/LandingComponents/Description";
import LeftSidePanel from "../components/LayoutComponents/LeftSidePanel";
import { Stack, Box } from "@mui/material";



export default function Landing() {
    return (
        <Stack direction="row" style={{ justifyContent: 'space-between' }}>
            <LeftSidePanel />
            <div className="vertical-divider"></div>
            <Box className="main-box" style={{ width: '100%' }}>
                <NavBar />
                <div className='line'></div>
                <MainPage />
                <Description />
            </Box>
        </Stack>
    )
}