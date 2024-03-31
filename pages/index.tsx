import { render } from "react-dom";
import styles from "/styles/Home.module.css";
import dynamic from "next/dynamic";
import DatePicker from "./DatePicker"
import ProductionLine from "@/pages/ProductionLine"
import { useEffect, useState } from "react";
import { Companies, Locations, Plants, Lines } from "@/interfaces";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

interface HomePageProps { }

export default function Home() {

  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/series').then((response) => response.json()).then((data) => {
      setSeries(data);
      console.log('fetched series', series);
    })
  }, [])

  useEffect(() => {
    if (series.length) {
      console.log('loaded TRUE', series);
      setLoading(false);
    }
  }, [series])




  
  function Selects() {
    const [companies, setCompanies] = useState<Companies[]>([]);
    const [locations, setLocations] = useState<Locations[]>([]);
    const [plants, setPlants] = useState<Plants[]>([]);
    const [lines, setLines] = useState<Lines[]>([])
    const [selectedCompany, setSelectedCompany] = useState<number | null>(null);
    const [selectedLocations, setSelectedLocations] = useState<number | null>(null);
    const [selectedPlants, setSelectedPlants] = useState<number | null>(null);
  
  
  
    useEffect(() => {
      fetchCompanies();
    }, []);
  
    const fetchCompanies = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/companies');
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error('Error fetching Companies:', error);
      }
    };
  
    const fetchLocations = async (companyId: number) => {
      try {
        const response = await fetch(`http://localhost:3000/api/locations?company=${companyId}`);
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error('Error fetching Pocations:', error);
      }
    };

    const fetchPlants = async (locationId: number) => {
      try {
        const response = await fetch(`http://localhost:3000/api/plants?locations=${locationId}`);
        const data = await response.json();
        setPlants(data);
      } catch (error) {
        console.error('Error fetching Plants')
      }
    };

    const fetchLines = async (plantId: number) => {
      try {
        const response = await fetch(`http://localhost:3000/api/lines?plants=${plantId}`);
        const data = await response.json();
        setLines(data);
      } catch (error) {
        console.error('Erro fetching Lines')
      }
    }



  
    const handleCompanyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const companyId = parseInt(event.target.value);
      setSelectedCompany(companyId);
      fetchLocations(companyId);
    };

    const handleLocationsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const locationId = parseInt(event.target.value);
      setSelectedLocations(locationId);
      fetchPlants(locationId);
    };

    const handlePlantsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const plantId = parseInt(event.target.value);
      setSelectedPlants(plantId);
      fetchLines(plantId);
    };

    
    
  
    return (
      <div>
        <label htmlFor="companySelect">Select Company:</label>
        <select id="companySelect" onChange={handleCompanyChange}>
          <option value="">Select...</option>
          {companies.map(company => (
            <option key={company.id} value={company.id}>{company.name}</option>
          ))}
        </select>
  
        <label className="ml-5" htmlFor="locationSelect">Select Location:</label>
        <select id="locationSelect" onChange={handleLocationsChange} disabled={!selectedCompany}>
          <option value="">Select...</option>
          {locations.map(location => (
            <option key={location.id} value={location.id}>{location.name}</option>
          ))}
        </select>

        <label className="ml-5" htmlFor="plantsSelect">Select Plant:</label>
        <select id="plantSelect" onChange={handlePlantsChange} disabled={!selectedLocations}>
          <option value="">Select...</option>
          {plants.map(plant => (
            <option key={plant.id} value={plant.id}>{plant.name}</option>
          ))}
        </select>

        <label className="ml-5" htmlFor="linesSelect">Select Lines</label>
        <select id="lineSelect" disabled={!selectedPlants}>
          <option value="">Select...</option>
          {lines.map(line => (
            <option key={line.id} value={line.id}>{line.name}</option>
          ))}
        </select>
        
      </div>
      
      
    );
  }
  

  

    
  
  


  const xaxis = {
    categories: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
  }

  const countOptions = {
    colors: ['#ffda2e', '#ee00ff'],
    tooltip: {
      enabled: true,
      theme: 'dark'
    },
    chart: {
      foreColor: 'dark',
    },
    subtitle: {
      text: 'Counts',
      offsetY: 0,
      offsetX: 8
    },
    markes: {
      size: 4,
      strokWidth: 2,
      strokeColor: '#ffda'
    },
    grid: {
      show: true,
    },
    xaxis
  }


  const countSeries = [{
    name: 'Sensor 1',
    data: [10, 2, 20, 4, 3, 60, 7, 80, 9, 1, 100, 23, 65, 23, 9, 17, 34, 10, 80, 24, 21, 56, 39, 50]
  }, {
    name: 'Sensor 2',
    data: [15, 2, 11, 4, 3, 30, 7, 58, 9, 1, 89, 12, 89, 54, 67, 23, 17, 90, 32, 20, 54, 29, 10, 78]
  }]

  const speedOptions = {
    subtitle: {
      text: 'Speed',
      offsetY: 0,
      offsetX: 8
    },
    xaxis
  }

  const speedSeries = [{
    name: 'Sensor 1',
    data: [10, 2, 20, 4, 3, 60, 7, 80, 69, 19, 100, 23, 65, 23, 9, 17, 34, 10, 80, 24, 21, 56, 39, 50]
  }, {
    name: 'Sensor 2',
    data: [15, 2, 11, 4, 3, 60, 7, 6, 29, 48, 89, 12, 89, 54, 67, 23, 17, 90, 32, 20, 54, 29, 10]
  }]


  const stopsOptions = {
    subtitle: {
      text: 'Stops',
      offsetY: 0,
      offsetX: 8
    },
    xaxis,
    chart: {
      stacked: true
    }

  }

  const stopsSeries = [{
    name: 'Sensor 1',
    data: [10, 28, 20, 4, 3, 60, 7, 80, 9, 17, 100, 23, 65, 23, 9, 17, 34, 10, 80, 24, 21, 56, 39, 50],
  }, {
    name: 'Sensor 2',
    data: [15, 21, 11, 4, 3, 60, 7, 60, 9, 15, 89, 12, 89, 54, 67, 23, 17, 90, 32, 20, 54, 29, 10, 78]
  }
  ]

  const ProductionLineData = {
    title: '',
    productionLine: 'W3 - Prod69 - L7',
    series3: 'Filler',
    series4: 'Labelizer',
    xPerMinute: 31,
    date: 'Thursday, 31 Aug 2023',
    counts: {
      counts: 60,
      low: 11 * 60,
      high: 16 * 60,
    },
    lost: 6,
    stops: 45,

  };



  return (
    <div>
      <div className="mt-5 mx-5">
      <Selects/>
      </div>
      <div className="flex flex-col space-y-6">
      <div className="flex items-center space-x-4">
        <h2 className="text-lg font-semibold mt-5 mx-5">SENSOR 1</h2>
        <div className="flex space-x-2 mt-5">
          <div className="flex flex-col justify-center p-4 w-64 bg-[#c5e0f4] rounded">
            <span className="text-left text-xl font-medium ">COUNT/S:</span>
            <span className="text-center text-2xl font-semibold ">0</span>
          </div>
          <div className="flex flex-col justify-center p-4 w-64 bg-[#c5e0f4] rounded">
            <span className="text-left text-xl font-medium">LOW/S:</span>
            <span className="text-center text-2xl font-semibold">0</span>
          </div>
          <div className="flex flex-col justify-center p-4 w-64 bg-[#c5e0f4] rounded">
            <span className="text-left text-xl font-medium">HIGH/S:</span>
            <span className="text-center text-2xl font-semibold">0</span>
          </div>
          <div className="flex flex-col justify-center p-4 w-64 bg-[#c5e0f4] rounded">
            <span className="text-left text-xl font-medium">STOP/S:</span>
            <span className="text-center text-2xl font-semibold">0</span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4" >
        <h2 className="text-lg font-semibold mx-5">SENSOR 2</h2>
        <div className="flex space-x-2">
          <div className="flex flex-col justify-center p-4 w-64 bg-[#b7e1a1] rounded">
            <span className="text-left text-xl font-medium">COUNT/S:</span>
            <span className="text-center text-2xl font-semibold">0</span>
          </div>
          <div className="flex flex-col justify-center p-4 w-64 bg-[#b7e1a1] rounded">
            <span className="text-left text-xl font-medium">LOW/S:</span>
            <span className="text-center text-2xl font-semibold">0</span>
          </div>
          <div className="flex flex-col  justify-center p-4 w-64 bg-[#b7e1a1] rounded">
            <span className="text-left text-xl font-medium">HIGH/S:</span>
            <span className="text-center text-2xl font-semibold">0</span>
          </div>
          <div className="flex flex-col justify-center p-4 w-64 bg-[#b7e1a1] rounded">
            <span className="text-left text-xl font-medium">STOP/S:</span>
            <span className="text-center text-2xl font-semibold">0</span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4" >
        <h2 className="text-lg font-semibold mx-5">SENSOR 3</h2>
        <div className="flex space-x-2">
          <div className="flex flex-col justify-center p-4 w-64 bg-[#ffd452] rounded">
            <span className="text-left text-xl font-medium">COUNT/S:</span>
            <span className="text-center text-2xl font-semibold">0</span>
          </div>
          <div className="flex flex-col justify-center p-4 w-64 bg-[#ffd452] rounded">
            <span className="text-left text-xl font-medium">LOW/S:</span>
            <span className="text-center text-2xl font-semibold">0</span>
          </div>
          <div className="flex flex-col  justify-center p-4 w-64 bg-[#ffd452] rounded">
            <span className="text-left text-xl font-medium">HIGH/S:</span>
            <span className="text-center text-2xl font-semibold">0</span>
          </div>
          <div className="flex flex-col justify-center p-4 w-64 bg-[#ffd452] rounded">
            <span className="text-left text-xl font-medium">STOP/S:</span>
            <span className="text-center text-2xl font-semibold">0</span>
          </div>
        </div>
      </div>

      <div className="Calendar p-4 ">
            <DatePicker />
      </div>


      <div className="Charts">
        {loading ? <h2>Loading...</h2> : <>
          <Chart options={countOptions} series={countSeries} type="line" height={350} width={1500} />
          <Chart options={speedOptions} series={speedSeries} type="area" height={350} width={1500} />
          <Chart options={stopsOptions} series={stopsSeries} type="bar" height={350} width={1500} />
        </>}
      </div>

    </div>
    </div>
  )
}
