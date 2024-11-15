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
    offsetY: 0,
    offsetX: 8,
    style: {
      fontSize: "19px",
      fontWeight: "medium",
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
    style: {
      fontSize: "19px",
      fontWeight: "medium",
    },
    offsetY: 0,
    offsetX: 8,
  },
  xaxis,
  colors: [],
};

export const stopsOptions = {
  subtitle: {
    style: {
      fontSize: "19px",
      fontWeight: "medium",
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
