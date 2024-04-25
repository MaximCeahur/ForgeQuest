import React from "react";
import { Stack } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';

export default function GoldPrivilege() {
    return (
        <>
            <Stack direction={"column"} sx={{ maxWidth: 1200, margin: "auto", paddingLeft: '250px' }}>
                <p style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 80, margin: 0, marginTop: 25, marginBottom: 20, color: "azure", textAlign: "center" }}>
                    Gold plan priviliges:
                </p>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <CheckIcon color="success"></CheckIcon>
                    <span style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 30, margin: 0, color: "azure" }}>
                        Rererved slot for mini-game lobby (Don't worry, kicked player will get free xp compensation)
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <CheckIcon color="success"></CheckIcon>
                    <span style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 30, margin: 0, color: "azure" }}>
                        Possibility to vote for difficulty of the game and for changing the map
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <CheckIcon color="success"></CheckIcon>
                    <span style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 30, margin: 0, color: "azure" }}>
                        Participating in monthly cosmetics giveaway
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <CheckIcon color="success"></CheckIcon>
                    <span style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 30, margin: 0, color: "azure" }}>
                        Possibility to wear epic, rare and common clothes and use standart and elite emotes/music kits
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <CheckIcon color="success"></CheckIcon>
                    <span style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 30, margin: 0, color: "azure" }}>
                        Gold nickname in the chat
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <AddIcon color="primary"></AddIcon>
                    <span style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 30, margin: 0, color: "azure" }}>
                        Creating private lobbies for mini-games
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <AddIcon color="primary"></AddIcon>
                    <span style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 30, margin: 0, color: "azure" }}>
                        Pets (from common to epic)
                    </span>
                </Stack>
                <Stack direction={"row"} style={{ width: '1000px', margin: 'auto', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <AddIcon color="primary"></AddIcon>
                    <span style={{ fontFamily: '"Jersey 10", sans serif', fontSize: 30, margin: 0, color: "azure" }}>
                        You can give 5 different people 1000 free XP in the same match with you
                    </span>
                </Stack>
            </Stack>
        </>
    )
}