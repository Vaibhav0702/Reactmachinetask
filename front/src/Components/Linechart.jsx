import React, { useEffect } from 'react'
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

export const Linechart = ({ data }) => {

    return (

        < Line
            data = {{
        labels: data ? data.map((e)=> e.x ) : [],
            datasets: [
                {
                    label: "",
                    data: data ? data.map((e)=> e.y) : [],
                    backgroundColor: "white",
                    borderColor: "#a6cee3",
                },
            ],
            width:600
            }
}
/>



    )
}
