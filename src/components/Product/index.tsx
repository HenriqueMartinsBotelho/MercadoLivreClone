import React from "react";

import tshirtImage from "../../assets/tshirt.png";
import ProductAction from "../ProductAction";
import SellerInfo from "../SellerInfo";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt" />
          </Gallery>
          <Info />
        </Column>
        <Column>
          <ProductAction />
          <SellerInfo />
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Compra garantida do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>
    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita labore
      eveniet perferendis ex ullam laborum similique eaque laboriosam quae?
      Aspernatur consequatur sequi cum dicta aperiam rem est? Odit, unde vel?
    </p>
    <br />
    <br />
    Itens inclusos: <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptas dolore
    quas. Saepe omnis aut eius rem ea. Praesentium qui natus inventore modi
    rerum fugiat repellendus omnis sapiente fugit possimus!
  </Description>
);

export default Product;
