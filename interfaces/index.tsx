export type Todos = {
  id: number;
  title?: string;
  completed?: string;
};

export type Companies = {
  id: number;
  companyid: number;
  name?: string;
};

export type Lines = {
  id: number;
  companyid: number;
  name?: string;
};

export type Locations = {
  id: number;
  companyid: number;
  name?: string;
};

export type Machines = {
  id: number;
  companyid: number;
  name?: string;
};

export type Plants = {
  id: number;
  name?: string;
};

export type Telemetries = {
  name: string;
  kpis: Kpis;
  series: Series;
  idvalue: number;
};

export type Kpis = {
  counts: number;
  lows: number;
  highs: number;
  stops: number;
};

export type Series = {
  speed: number[];
  count: number[];
  stops: number[];
};
