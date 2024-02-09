import React, { useEffect, useState } from 'react'
import stateBoard from '../Assets/StatBoard.png'
import brifCase from '../Assets/Briefcase.png'
import circleMenu from '../Assets/Circled Menu.png'
import support from '../Assets/Support.png'
import pluGins from '../Assets/Puzzle.png'
import help from '../Assets/Help.png'
import shutDown from '../Assets/Shutdown.png'
import profile from '../Assets/Rectangle 10.png'
import axios from 'axios'
import media from '../Assets/media.png'

import insta from '../Assets/instagram.png'
import fb from '../Assets/facebook.png'
import twitter from '../Assets/twitter.png'

import { Table } from './Table'
import { Linechart } from './Linechart'
import { PieChart } from './PieChart'

export const Dashboard = () => {

    var [tableData, setTableData] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [graphData, setGraphData] = useState([]);


    useEffect(() => {
        fetchData('api/table', setTableData);
        fetchData('api/pie-chart', setChartData);
        fetchData('api/graph', setGraphData);


    }, []);

    const fetchData = async (url, setData) => {
        try {
            const response = await axios.get(`http://localhost:3001/${url}`);
            setData(response.data);

        
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };







    return (
        <div className='flex h-screen'>
            <div className='w-[20%] bg-[#20263a] flex flex-col justify-between'>

                <div className='w-full p-10 flex flex-col justify-center items-center'>
                    <img src={brifCase} alt="brifcase" />
                    <img src={stateBoard} alt='stateBoard png' />
                </div>

                <div className='w-full flex flex-row-reverse'>
                    <ul className='w-[80%]'>
                        <li className='m-3 mr-0 p-2 rounded-l-lg bg-white flex items-center gap-2 pl-5'>
                            <img src={circleMenu} alt="" />
                            Dashboard
                        </li>
                        <li className='m-3 mr-0 p-2 rounded-l-lg text-white  bg-[#1a1f30] flex items-center gap-2 pl-5'>
                            <img src={support} alt="" />
                            Support
                        </li>
                        <li className='m-3 mr-0 p-2 rounded-l-lg text-white bg-[#1a1f30] flex items-center gap-2 pl-5'>
                            <img src={pluGins} alt="" />
                            Plugins
                        </li>
                        <li className='m-3 mr-0 p-2 rounded-l-lg text-white bg-[#1a1f30] flex items-center gap-2 pl-5'>
                            <img src={help} alt="" />
                            Help
                        </li>


                    </ul>
                </div>

                <div className='w-full flex items-center justify-center gap-2 p-3 bg-white text-[red]'>
                    Logout
                    <img src={shutDown} alt="" />
                </div>



            </div>

            <div className=' w-full h-screen overflow-auto bg-[#e8edff] pl-5'>

                <div className='flex justify-between items-center p-5 pl-0'>

                    <div >
                        <h2>Good Morning! 🌞</h2>
                    </div>

                    <div className='border rounded-lg p-3 bg-white flex justify-between gap-3'>
                        <div>
                            <p>Jonh Deo</p>
                            <p>jonh@deo.com</p>
                        </div>

                        <img className='rounded' src={profile} alt="" />

                    </div>

                </div>

                <div className='flex gap-5 pr-10'>
                    <div className='w-[70%] bg-white p-5 rounded-lg'>
                        <Linechart data={graphData} />
                    </div>
                    <div className='w-[30%]  bg-white p-5 rounded-lg'>
                        <PieChart data={chartData} />
                    </div>
                </div>


                <div className='flex gap-5 pt-5 pr-10 pb-5'>
                    <Table data={tableData} />
                    
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg">

                        <img class="rounded-t-lg w-full" src={media} alt="" />

                        <div class="p-5 flex flex-col justify-center items-center">
                            <h3 className='bold'>Jonh Deo</h3>
                            <p>CEO</p>
                            <div className='flex w-[60%] justify-around'>
                                <img src={fb} alt="" />
                                <img src={insta} alt="" />
                                <img src={twitter} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}
