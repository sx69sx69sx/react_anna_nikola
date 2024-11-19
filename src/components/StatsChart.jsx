import React from 'react';

const StatsChart = ({ value, label }) => {
  return (
    <div className="chart">
      <h1>{value}</h1>
      <p>{label}</p>
    </div>
  );
};

export default StatsChart;
