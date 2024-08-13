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
      <section className="cards">
        <Card title={"Valor Aplicado"}>
          <h3 className="valor">R$ 900,00</h3>
        </Card>
        <Card title={"Saldo Bruto"}>
          <h3 className="valor">R$ 1.000,00</h3>
        </Card>
        <Card title={"Variação"}>
          <h3 className="variacao">1.11%</h3>
        </Card>
      </section>
      <section className="chards">
        <div className="Dividendo">
          
        </div>
        <div className="Carteira">
          <h1>Carteira</h1>
          <Pie data={chartData} />
        </div>
        <div className="Meta">
          <h3>Meta R$ 10,00 de Recibos Mensais</h3>
          <div className="line">
            <p>80%</p>
            <div className="line-complete">
            </div>
          </div>
        </div>
        <div className="Tipo">
          <h3>% em Renda Variavel</h3>
          <div className="line">
            <p>95%</p>
            <div className="line-complete">
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Home;
