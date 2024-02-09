import React from 'react';
import { Pie } from 'react-chartjs-2';

export const PieChart = ({ data }) => {
    return (
        <Pie
            data={{
                labels: data ? data.map((e) => e.label) : [],
                datasets: [
                    {
                        label: "",
                        data: data ? data.map((e) => e.value) : [],
                        backgroundColor: ['#67c587' ,'#88d1a1','#a9deba' , '#c9ead4' ,'#eaf6ed'],
                        borderColor: "#a6cee3",
                    },
                ],
            }}
        />
    );
};
