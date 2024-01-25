import {render} from "react-dom";
import styles from "/styles/Home.module.css";
import dynamic from "next/dynamic";
import DatePicker from "./DatePicker"



const Chart = dynamic(()=> import ('react-apexcharts'),{
    ssr: false
})

const xaxis = {
    categories: ['00', '01', '02', '03', '04', '05', '06','07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
}


const countOptions ={
    colors: ['#ffda2e','#ee00ff'],
    tooltip:{
        enabled: true,
        theme: 'dark'
    },
    chart: {
        foreColor: 'dark',
    },
    subtitle:{
        text:'Counts',
        offsetY: 0,
        offsetX: 8
    },
    markes: {
        size: 4,
        strokWidth: 2,
        strokeColor: '#ffda'
    },
    grid:{
        show: true,
    },
    xaxis 
}


const countSeries =[{
    name:'Sensor 1',
    data:[10, 2, 20, 4, 3, 60, 7, 80, 9, 1, 100, 23, 65, 23, 9, 17, 34, 10, 80, 24, 21, 56, 39, 50]
},{
    name:'Sensor 2',
    data:[15, 2, 11, 4, 3, 60, 7, 6, 9, 1, 89, 12, 89, 54, 67, 23, 17, 90, 32, 20, 54, 29, 10, 78]
}]

const areaOptions ={
    xaxis,
}

const areaSeries =[{
    name:'Sensor 1',
    data:[10, 2, 20, 4, 3, 60, 7, 80, 9, 1, 100, 23, 65, 23, 9, 17, 34, 10, 80, 24, 21, 56, 39, 50]
},{
    name:'Sensor 2',
    data:[15, 2, 11, 4, 3, 60, 7, 6, 9, 1, 89, 12, 89, 54, 67, 23, 17, 90, 32, 20, 54, 29, 10, 78]
}]


const columnOptions ={
    xaxis
}

const columnSeries =[{
    name:'Sensor 1',
    data: [10, 2, 20, 4, 3, 60, 7, 80, 9, 1, 100, 23, 65, 23, 9, 17, 34, 10, 80, 24, 21, 56, 39, 50],
},{
    name:'Sensor 2',
    data: [15, 2, 11, 4, 3, 60, 7, 6, 9, 1, 89, 12, 89, 54, 67, 23, 17, 90, 32, 20, 54, 29, 10, 78]
} 
]

export default function Home(){
    return(

        <div>
            
            <form>
                <label htmlFor="Sensor1">Sensor 1:</label>
                <select id="dropdown1">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                <br></br>
                <br></br>
                <label htmlFor="Sensor2">Sensor 2:</label>
                <select id="dropdown2">
                    <option value="option1">Option 1</option>
                    <option value="option1">Option 1</option>
                    <option value="option1">Option 1</option>
                </select>
            </form>
            <br></br>
            <DatePicker />

            <Chart options={countOptions} series={countSeries} type="line" height={350} />

            <Chart options={areaOptions} series={areaSeries} type="area"  height={350} />

            <Chart options={columnOptions} series={columnSeries} type="bar" height={350} />
            
        </div>
    )
}