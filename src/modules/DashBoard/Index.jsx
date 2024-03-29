import React, { useState } from "react";
import { CardContent, Typography } from "@mui/material";
import { Card, Row, Col, Statistic, Divider } from "antd";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { chartConfig } from "./Utils/chartConfig";
import { Container, CustomStatistic } from "./styles";

import { UserOutlined, MedicineBoxOutlined } from "@ant-design/icons";
import LatestUsers from "./Components/LatestUsers";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const HospitalDashboard = () => {
  const [data, setData] = React.useState(chartConfig.data);
  const [renderCount, setRenderCount] = useState(0);
  const updateData = () => {
    setRenderCount(renderCount + 1);
  };
  const employee = 25;
  const pacientes = 125;
  const valueStyle = {
    color: "#f2f3f3",
  };
  const cardStyle = {
    textAlign: "center",
    backgroundColor: "#847cd6",
  };
  const cardStyle2 = {
    textAlign: "center",
    backgroundColor: "#7acad6",
  };
  return (
    <Container>
      <Row gutter={16}>
        <Col span={12}>
          <Card style={cardStyle2}>
            <CustomStatistic
              title="Número de Pacientes"
              value={pacientes}
              valueStyle={valueStyle}
              prefix={<MedicineBoxOutlined />}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card style={cardStyle}>
            <CustomStatistic
              title="Número de Funcionários"
              value={employee}
              valueStyle={valueStyle}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <Row style={{ backgroundColor: "#fff", marginTop: "3px" }}>
        <Col span={12} offset={6}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Novos Pacientes por Mês
            </Typography>
            <Line data={data} options={chartConfig.options} key={updateData} />
          </CardContent>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col span={24}>
          <LatestUsers />
        </Col>
      </Row>
    </Container>
  );
};

export default HospitalDashboard;
