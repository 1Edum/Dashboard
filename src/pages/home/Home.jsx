import  { useState, useEffect } from "react";
import Card from "../../componentes/card/Card";
import "./home.scss";
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement,Tooltip, Legend, } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const initialData = {
  labels: ['FIIs', 'Ações', 'Renda Fixa'],
  datasets: [
    {
      data: [60, 35, 5],
      backgroundColor: [
        '#FD413C',
        '#FEBC2C',
      '#ca3530',
      ],
      borderWidth: 2,
    },
  ]
}

const Home = () => {
  const [chartData] = useState(initialData);

  useEffect(() => {
    // Função de limpeza para destruir o gráfico antes de recriar
    return () => {
      if (Chart.instances.length > 0) {
        Chart.instances.forEach(chart => chart.destroy());
      }
    };
  }, [chartData]);

  return (
    <div className="home">
      <section>
        <Card title={"Valor Aplicado"} />
        <Card title={"Saldo Bruto"} />
        <Card title={"Variação"} />
      </section>
      <section className="chards">
        <div className="Dividendo">
          
        </div>
        <div className="Carteira">
          <h1>Carteira</h1>
          <Pie data={chartData} />
        </div>
        <div className="Meta"></div>
        <div className="Tipo"></div>
      </section>
    </div>
  );
};

export default Home;
