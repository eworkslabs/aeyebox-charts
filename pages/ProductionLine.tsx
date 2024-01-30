import React from 'react';

interface ProductionLineProps {
  data: {
    title: string;
    productionLine: string;
    series3: string;
    series4: string;
    xPerMinute: number;
    date: string;
    counts: {
      counts: number;
      low: number;
      high: number;
    };
    lost: number;
    stops: number;
  };
}

const ProductionLine: React.FC<ProductionLineProps> = ({ data }) => {
  const formatCounts = (counts: { low: number; high: number }): string => {
    const lowPerMinute = counts.low / 60;
    const highPerMinute = counts.high / 60;
    return `${counts.counts} Counts: ${counts.low} Low/m, ${counts.high} High/m - ${lowPerMinute} Low/s, ${highPerMinute} High/s`;
  };

  return (
    <div>
      <h2>{data.title}</h2>
      <p>
        {data.xPerMinute} x/minute <br />
        {data.date} <br />
        {formatCounts(data.counts)} <br />
        Lost: {data.lost} <br />
        Stops: {data.stops} <br />
      </p>
    </div>
  );
};

export default ProductionLine;