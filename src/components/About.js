import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function About() {
    return (
        <Box>
            <Typography> Hey bitches</Typography>
            <FontAwesomeIcon icon={faCoffee} />
        </Box>
    )
}

export default About
