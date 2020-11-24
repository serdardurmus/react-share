import React from 'react'
import { Button, TextField } from '@material-ui/core';

const Signup = () => {
    return (
        <div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained" color="primary">Submit</Button>
            <Button variant="contained" color="primary">Google</Button>
            {
                // displayName input
                // email input
            }
        </div>
    )
}

export default Signup;
