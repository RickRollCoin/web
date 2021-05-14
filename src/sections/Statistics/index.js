import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import { MyResponsivePieCanvas } from "reusecore/PieChart";

import data from "assets/data/statistics";
import StatisticsSectionWrapper from "./statistics.style";

import React from "react";

const Statistics = () => {
  let width = () => {
    if(typeof window === "undefined"){
      return 1000; 
    }
    return window?.innerWidth;
  }
  return (
    <StatisticsSectionWrapper>
      <Box className="statistics-wrapper">
        <Container className="token-distribution">
          <Row>
              <Box className="statistics-image">
                <Heading as="h2">Token Distribution</Heading>
                <div style={{height: 350}}><MyResponsivePieCanvas data={data} width={width()}/></div>
              </Box>
          </Row>
        </Container>
      </Box>
    </StatisticsSectionWrapper>
  );
};

export default Statistics;
