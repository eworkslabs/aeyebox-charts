

export const colorskpis = ["#0a0a0a", "#0F75A0", "#2e1065", "#44403c", "#581c87", "#94a3b8"];

export const xaxis = {
  categories: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
};

export const countOptions = {
  colors: colorskpis,
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
  colors: colorskpis,
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
  colors: colorskpis,
  chart: {
    stacked: true,
  },
};
