import React from "react";
import ChartBar from './ChartBar.js'
import './Chart.css';
const Chart = props => {

    let total = 0;
    for (let i=0;i<props.dataPoints.length;i++) {
        total += props.dataPoints[i].value;
    }

    return <div className="chart">
        {
            props.dataPoints.map(dataPoint => (
                <ChartBar 
                    key={dataPoint.label} 
                    value={dataPoint.value}
                    totalValue={total} 
                    label={dataPoint.label} />
            )
            )
        }
    </div>
};

export default Chart;
