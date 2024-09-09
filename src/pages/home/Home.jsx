import { useState } from "react";
import Card from "../../componentes/card/Card";
import BarChart from "../../componentes/charts/barchart/BarChart";
import PieChart from "../../componentes/charts/piechart/PieChart";
import "./home.scss";

const initialDataPie = {
  labels: ['FIIs', 'Ações', 'Renda Fixa'],
  datasets: [
    {
      data: [60, 35, 5],
      backgroundColor: ['#FD413C', '#FEBC2C', '#ca3530'],
      borderWidth: 2,
    },
  ],
};

const initialDataBar = {
  labels: ['FIIs', 'Ações', 'Renda Fixa'],
  datasets: [
    {
      label: 'Investimentos',
      data: [60, 35, 5],
      backgroundColor: ['#FD413C', '#FEBC2C', '#ca3530'],
      borderWidth: 2,
    },
  ],
};

const Home = () => {
  const [chartDataPie] = useState(initialDataPie);
  const [chartDataBar] = useState(initialDataBar);

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
          <h1>Rendimentos Recebidos (12 meses) </h1>
          <BarChart chartData={chartDataBar} />
        </div>
        <div className="Carteira">
          <h1>Carteira</h1>
            <PieChart chartData={chartDataPie} />
        </div>
        <div className="Meta">
          <h3>Meta R$ 10,00 de Recibos Mensais</h3>
          <div className="line">
            <p>80%</p>
            <div className="line-complete"></div>
          </div>
        </div>
        <div className="Tipo">
          <h3>% em Renda Variável</h3>
          <div className="line">
            <p>95%</p>
            <div className="line-complete"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
