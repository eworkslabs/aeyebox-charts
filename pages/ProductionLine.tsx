import React from 'react';

interface ProductionLineProps {
  data: {
    title: string;
    productionLine: string;
    series3: string;
    series4: string;
    xPerMinute: number;
    date: string;
    lost: number;
    stops: number;
    counts: {
      counts: number;
      low: number;
      high: number;
    };
  };
}

const ProductionLine: React.FC<ProductionLineProps> = ({ data }) => {
  const formatCounts = (counts: { low: number; high: number }): string => {
    const lowPerMinute = counts.low / 60;
    const highPerMinute = counts.high / 60;
    return  `${data.counts.counts} Counts: ${counts.low} Low/m: - ${counts.high} High/m: - ${lowPerMinute} Low/s: - ${highPerMinute} High/s: - `; 
  };

  return (
    <>
      <p>
        {formatCounts(data.counts)}
        Lost: {data.lost} -
        Stops: {data.stops}
      </p>
    </>   
  );
};

export default ProductionLine;