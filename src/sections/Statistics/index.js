import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import { SectionTitle } from "reusecore/SectionTitle";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Image from "reusecore/Image";
import { MyResponsivePieCanvas } from "reusecore/PieChart";

import data from "assets/data/statistics";
import StatisticsSectionWrapper from "./statistics.style";

const Statistics = () => {
  return (
    <StatisticsSectionWrapper>
      <Box className="statistics-wrapper">
        <Container className="token-distribution">
          <Row>
              <Box className="statistics-image">
                <Heading as="h2">Token Distribution</Heading>
                <div style={{height: 350}}><MyResponsivePieCanvas data={data} /></div>
              </Box>
          </Row>
        </Container>
      </Box>
    </StatisticsSectionWrapper>
  );
};

export default Statistics;
