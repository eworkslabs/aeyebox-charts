import jsonData1 from "@/data/telemetries/1.json"
import jsonData2 from "@/data/telemetries/2.json"
import jsonData3 from "@/data/telemetries/3.json"

export const colorskpis = []; //[jsonData1.color, jsonData2.color, jsonData3.color];

export const xaxis = {
  categories: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
};

export const countOptions = {
  colors: [],
  tooltip: {
    enabled: true,
  },
  chart: {
    foreColor: "dark",
  },
  subtitle: {
    text: "→ Counts",
    offsetY: 0,
    offsetX: 8,
    style:{
      fontSize: "19px",
      fontWeight: 'medium'
    },
  },
  markes: {
    size: 4,
    strokWidth: 2,
    strokeColor: "#ffda",
  },
  grid: {
    show: true,
  },
  xaxis,
};

export const speedOptions = {
  subtitle: {
    text: "→ Speed",
    style:{
      fontSize: "19px",
      fontWeight: 'medium'
    },
    offsetY: 0,
    offsetX: 8,
  },
  xaxis,
  colors: [],
};

export const stopsOptions = {
  subtitle: {
    text: "→ Stops",
    style:{
      fontSize: "19px",
      fontWeight: 'medium'
    },
    offsetY: 0,
    offsetX: 8,
  },
  xaxis,
  colors: [],
  chart: {
    stacked: true,
  },
};
