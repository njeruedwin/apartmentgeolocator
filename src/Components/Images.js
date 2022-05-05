import React, { Component } from "react";
import beautifulblack from "../images/beautifulblack.jpg";

import { Card, Row, Col } from "antd";
import "antd/dist/antd.css";
const { Meta } = Card;

const Images = ({ image }) => {
  console.log(image.imageMainView);
  console.log(beautifulblack);
  const apt = "apartment1.webp";
  return (
    <div className="site-card-wrapper">
      <Row glutter={16}>
        <Col span={8}>
          <Card
            hoverable
            cover={<img src={require(`../images/${image.imageOne}`)} />}
          >
            <Meta title="Best Of Apartments" description="apartment view" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            cover={
              <img
                alt="house image"
                src={require(`../images/${image.imageTwo}`)}
              />
            }
          >
            <Meta title="Best In Town" description="apartment view" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            cover={
              <img
                alt="house image"
                src={require(`../images/${image.imageThree}`)}
              />
            }
          >
            <Meta
              title="Best Of Residential Leaving"
              description="apartment view"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Images;
