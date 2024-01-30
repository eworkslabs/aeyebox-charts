import {render} from "react-dom";
import styles from "/styles/Home.module.css";
import dynamic from "next/dynamic";
import DatePicker from "./DatePicker"
import ProductionLine from "@/pages/ProductionLine"

interface HomePageProps{}


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
    data:[15, 2, 11, 4, 3, 30, 7, 58, 9, 1, 89, 12, 89, 54, 67, 23, 17, 90, 32, 20, 54, 29, 10, 78]
}]

const speedOptions ={
    subtitle: {
        text:'Speed',
        offsetY: 0,
        offsetX: 8
    },
    xaxis
}

const speedSeries =[{
    name:'Sensor 1',
    data:[10, 2, 20, 4, 3, 60, 7, 80, 69, 19, 100, 23, 65, 23, 9, 17, 34, 10, 80, 24, 21, 56, 39, 50]
},{
    name:'Sensor 2',
    data:[15, 2, 11, 4, 3, 60, 7, 6, 29, 48, 89, 12, 89, 54, 67, 23, 17, 90, 32, 20, 54, 29, 10]
}]


const stopsOptions ={
    subtitle: {
        text:'Stops',
        offsetY: 0,
        offsetX: 8
    },
    xaxis,
    chart:{
        stacked: true
    }
    
}

const stopsSeries =[{
    name:'Sensor 1',
    data: [10, 28, 20, 4, 3, 60, 7, 80, 9, 17, 100, 23, 65, 23, 9, 17, 34, 10, 80, 24, 21, 56, 39, 50],
},{
    name:'Sensor 2',
    data: [15, 21, 11, 4, 3, 60, 7, 60, 9, 15, 89, 12, 89, 54, 67, 23, 17, 90, 32, 20, 54, 29, 10, 78]
} 
]


    const ProductionLineData = {
        title: 'Production Line W3-Prod69-L7',
        productionLine: 'W3 - Prod69 - L7',
        series3: 'Filler',
        series4: 'Labelizer',
        xPerMinute: 31,
        date: 'Thursday, 31 Aug 2023',
        counts:{
            counts: 367,
            low: 11 * 60,
            high: 16 * 60,
        },
        lost: 6,
        stops: 45,

    };


export default function Home(){
    return(

    
        <div>
            <div className="panel1">
                <form>
                    <label htmlFor="Sensor 1">Sensor 1</label>
                    <select id="dropdown1">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </form>
            </div>
            <br></br>
            <div>
                <ProductionLine data={ProductionLineData}  /> 
            </div>
            

            <div className="panel2">
                <form>
                    <label htmlFor="Sensor 1">Sensor 2</label>
                    <select id="dropdown2">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <div>
                        <ProductionLine data={ProductionLineData} />
                    </div>
                </form>

            </div>

            <br></br>
            <DatePicker />
            <br></br>
            <br></br>

            <Chart options={countOptions} series={countSeries} type="line" height={350} />
            <Chart options={speedOptions} series={speedSeries} type="area" height={350} />
            <Chart options={stopsOptions} series={stopsSeries} type="bar" height={350} /> 
        </div>
    )
}

