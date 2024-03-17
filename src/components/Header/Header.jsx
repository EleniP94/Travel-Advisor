import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import {AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons";

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar className={CallMissedSharp.toolbar}>
                <Typography variant="h5" className={CallMissedSharp.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={CallMissedSharp.title}>
                        Explore New Places
                    </Typography>
                    <Autocomplete>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                        </div>
                        <InputBase placeholder="Search..." classes={{root: classes.inputRoot, input: classes.inputInput }} />
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;