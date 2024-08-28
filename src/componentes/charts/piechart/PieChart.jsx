import PropTypes from 'prop-types';
import { Pie } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ chartData }) {
  return (
    <div>
      <Pie 
            data={chartData} 
            options={{
              plugins: {
                legend: {
                  display: true,
                  position: 'right', // Posição da legenda (top, left, bottom, right)
                },
                datalabels: {
                  color: '#000', // Cor do texto
                  textAlign: 'center',
                  font: {
                    weight: 'bold',
                    size: 20,
                  },
                  formatter: (value, context) => {
                    return context.chart.data.labels[context.dataIndex];
                  },
                },
              },
            }} 
          />
    </div>
  );
}

PieChart.propTypes = {
  chartData: PropTypes.object.isRequired,
};

export default PieChart;
