import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import Counter from "reusecore/Counter";
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle";

import walletImage from "assets/images/wallet-image.svg";
import SectionParticle from "assets/images/particles/crypto-managment-wallet.svg";

import data from "assets/data/wallet";
import WalletSectionWrapper from "./wallet.style";

const Wallet = () => {
  return (
    <WalletSectionWrapper>
      <Container>
        <img
          src={SectionParticle}
          className="section__particle"
          alt="cryptik"
        />
        <Row>
            <Box className="wallet-left-content">
              <SectionTitle>
                <SectionBackground>
                  <Heading> Rick roll coin will never </Heading>
                </SectionBackground>
                <Text>
                  Give you up <br />
                  Let you down <br />
                  Run around <br />
                  Desert you <br />
                  Make you cry <br />
                  Say goodbye <br />
                  Tell a lie <br />
                  Hurt you <br />
                </Text>
              </SectionTitle>

              <Box className="wallet-info">
                {data.wallet.map((item, index) => (
                  <Box className="counter-item" key={index}>
                    <Counter end={item.count} suffix={item.suffixText} />
                    <Text>{item.body}</Text>
                  </Box>
                ))}
              </Box>
            </Box>
            <img src={SectionParticle} className="section__particle__right" alt="cryptik" />
        </Row>
      </Container>
    </WalletSectionWrapper>
  );
};

export default Wallet;
