import type { NextApiRequest, NextApiResponse } from "next";
import type { Series } from "../../interfaces";



export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Series[]>
) {

function random(){
    var numerosAleatorios = [];
for (var i = 0; i < 24; i++) {
    numerosAleatorios.push(Math.floor(Math.random() * 101));
} 
return numerosAleatorios
  
}   


const series: Series[] = [{
    name:'Sensor 1',
    data: random(),
},{
    name:'Sensor 2',
    data: random(),
},{
    name:'Sensor 3',
    data: random(),
}
]




  res.status(200).json(series);
}
