import "./chart.css"


import useDragger from "../DraggerComponent/dragger";


function Chart() {
    
    useDragger("chart-box");
    return(
        <div id="chart-box" className="box">

        </div>
    )
}

export default Chart




