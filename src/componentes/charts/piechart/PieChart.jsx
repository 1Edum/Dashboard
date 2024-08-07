import PropTypes from 'prop-types';
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            }
          }
        }}
      />
    </div>
  );
}

PieChart.propTypes = {
    chartData: PropTypes.node,
  };
export default PieChart;