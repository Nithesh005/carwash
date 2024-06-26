import { Alert, AlertTitle, Box, Button, Skeleton, Tooltip, styled, tooltipClasses } from "@mui/material"
import BasicBars from "../Charts/BasicBars"
import BasicGauges from "../Charts/BasicGauges"
import PieArcLabel from "../Charts/PieArcLabel"
import '../output.css'
import { useState } from "react"
export const Dashboard = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setTimeout(() => {
            setIsVisible(false);  // Toggle the state after 3000ms (3 seconds)
        }, 3000);  // 3000ms = 3 seconds
    };
    toggleVisibility()
    return (
        <div className="container">
            {isVisible && <Skeleton animation="wave" variant="rectangular" width={300} height={200} />}

            <div className="row1 flex items-center">
                <BasicBars />
                <PieArcLabel />
            </div>
            {/* <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
                <div class="col-span-2">01</div>
                <div class="col-span-2">02</div>
                <div>03</div>
                <div>04</div>
                <div>
                    05
                </div>
            </div> */}
            <BasicGauges />
        </div>
    )
}