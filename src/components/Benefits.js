import React from 'react'
import  OfflineBoltOutlinedIcon  from '@material-ui/icons/OfflineBoltOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import  LoopIcon from '@material-ui/icons/Loop';
import OpacityIcon from '@material-ui/icons/Opacity';
import  TimerIcon from '@material-ui/icons/Timer';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';


import '../css/layout.css'



const Benefits = () => {
    return (
        <div className="container" style={{
            margin: "2rem auto ",
            textAlign: "center",
            height: "60vh",
        }}>
            <h1>Discover The Benefits</h1>
            <div className="grid" style={{
                display: "grid",
                gridGap: "3rem",
                gridTemplateColumns: "repeat(3, 1fr)",
                padding: "1rem",
                marginTop: "3rem"
            }}>
                <div className="benefit">
                    <LoopIcon fontSize="large" />
                    <h2>Release Knots</h2>
                </div>
                <div className="benefit">
                    <FavoriteBorderIcon fontSize="large" />
                    <h2>Increase Blood Flow</h2>
                </div>
                <div className="benefit">
                    <OfflineBoltOutlinedIcon fontSize="large" />
                    <h2>Faster Recovery</h2>
                </div>
                <div className="benefit">
                    <TimerIcon fontSize="large" />
                    <h2>Anytime</h2>
                </div>
                <div className="benefit">
                    <FitnessCenterIcon fontSize="large" />
                    <h2>Prevent Injury</h2>
                </div>
                <div className="benefit">
                    <OpacityIcon fontSize="large" />
                    <h2>Release of lactic acid</h2>
                </div>
            </div>
            
        </div>
    )
}

export default Benefits
