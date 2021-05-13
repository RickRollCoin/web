import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import { SectionTitle } from "reusecore/SectionTitle";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";

import UserMapImage from "assets/images/stonks.jpg";
import UserMapWrapper from "./userMap.style";

const UserMap = () => {
  return (
    <UserMapWrapper>
      <Box className="usermap-wrapper">
        <Container className="fluid">
          <Row>
            <Col className="sm-12 md-10 offset-md-1">
              <SectionTitle className="text-center">
                <Heading>There is only one way this token can go</Heading>
              </SectionTitle>
            </Col>
          </Row>
          <Row>
            <Col className="md-12">
              <Box className="usermap-block">
                <Image src={UserMapImage} alt="cryptik user map" />
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </UserMapWrapper>
  );
};

export default UserMap;
