import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import { List, ListItem } from "reusecore/List";
import Subscribe from "sections/Subscribe";

import cryptikFooterLogo from "assets/images/logo-white.png";
import data from "assets/data/footer";
import FooterWrapper from "./footer.style";

const Footer = () => {
  return (
    <FooterWrapper>
      <Box className="footer-content-wrapper">
        <Subscribe />
        <Container>
          <Row>
            <Col className="lg-6 sm-6">
              <Box className="footer-widgets company-desc">
                <Image src={cryptikFooterLogo} alt="cryptik footer logo" />
                <Text>
                  If you have any questions fell free to ask.
                  Just remember it could take us some time to responde you.
                  Rick roll coin will never give you up.
                  Drop us an email or contact by one of the other plaforms.
                </Text>

                <Box className="contact-info">
                  <Link href="#">
                    <a>
                      {" "}
                      <FaEnvelope /> info@rickrolltoken.com{" "}
                    </a>
                  </Link>
                </Box>
              </Box>
            </Col>
            <Col className="lg-6 sm-6">
              <Box className="footer-widgets footer-social-links">
                <Heading as="h2">Social links</Heading>
                <List class="flex_list">
                {data.links.map((item, index) => (
                  <ListItem class="social_icon">
                    <a target="_blank" href={item.url} key={index}> {item.icon}</a>
                  </ListItem>
                ))}
                </List>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col className="xs-12">
              <Box className="copyright-text">
                <Text>&copy; RickRollToken | All rights reserved 2021</Text>
                <Text as="span">
                  Designed By{" "}
                  <a target="_blank" href="https://www.linkedin.com/in/kacper-w-a188b5115/">Kacper Werema</a>
                </Text>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
