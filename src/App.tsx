import React from 'react';

import { Typography, Box, Link } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Box p={3}>
                <Typography variant="h4" align="center">
                    A React boilerplate
                </Typography>
                <Box display="flex" flexDirection="row" justifyContent="center">
                    <Link href="/one">One</Link>
                    <Box p={2} />
                    <Link href="/two">Two</Link>
                    <Box p={2} />
                    <Link href="/three">Three</Link>
                </Box>
            </Box>
            <Switch>
                <Route path="/one">
                    <Typography variant="h6" align="center">
                        Page one
                    </Typography>
                </Route>
                <Route path="/two">
                    <Typography variant="h6" align="center">
                        Page two
                    </Typography>
                </Route>
                <Route path="/three">
                    <Typography variant="h6" align="center">
                        Page three
                    </Typography>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
