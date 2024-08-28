import PropTypes from 'prop-types';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Registre os elementos e escalas necessários para gráficos de barras
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BarChart({ chartData = {} }) { // Valor padrão para chartData
  if (!chartData || !chartData.datasets || chartData.datasets.length === 0) {
    return <div>Loading...</div>; // Pode ser qualquer UI alternativa
  }

  return (
    <div>
      <Bar 
        data={chartData} 
        options={{
          maintainAspectRatio: false,
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
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 20,
                color: '#000',
              },
            },
            x: {
              ticks: {
                color: '#000',
              },
            },
          },
        }} 
      />
    </div>
  );
}

BarChart.propTypes = {
  chartData: PropTypes.object,
};

export default BarChart;
