import React from 'react'
import { Button } from '@material-ui/core'
import './Home.css'
function Home() {
    return (
        <div className="App">
            <div className="imgbox">
                <p style={{ fontSize: '50px' }} className="pigpink">
                    Pigs are the best!
                </p>
                <p>Welcome to this page!</p>
                <Button variant="outlined" color="secondary">
                    About this page
                </Button>
                <Button variant="outlined" color="secondary">
                    Trivia Quiz
                </Button>
                <Button variant="outlined" color="secondary">
                    Pigtures
                </Button>
            </div>
        </div>
    )
}

export default Home
