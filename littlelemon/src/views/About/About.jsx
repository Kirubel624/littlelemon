// AboutPage.jsx
import React from "react";
import { Card, Space, Image, Row, Col } from "antd";
import MarioAndAdrianone from "../../assets/MarioandAdrianA.jpg";
import MarioAndAdriantwo from "../../assets/MarioandAdrianb.jpg";
const AboutPage = () => {
  return (
    <div className="px-8 pt-24">
      <h1 className="text-3xl font-bold mb-4">About Little Lemon Chicago</h1>
      <Card>
        <Space direction="vertical" size="middle">
          <p>
            Little Lemon is a family-owned Mediterranean restaurant, offering a
            delightful fusion of traditional recipes with a modern twist.
          </p>
          <p className="mt-4">
            <strong>Meet the Owners:</strong>
          </p>
          <Space direction="vertical" size="middle">
            <p className="font-medium">Adrian</p>
            <p>
              Adrian, one of the proud owners of Little Lemon Chicago, brings
              passion and expertise to the kitchen. With a commitment to
              preserving the authenticity of Mediterranean flavors, Adrian
              ensures that every dish tells a story of tradition and quality.
            </p>
            <p className="font-medium">Mario</p>
            <p>
              Mario, the other half of the ownership duo, is dedicated to
              creating a warm and inviting dining experience. His vision for
              Little Lemon Chicago goes beyond just serving delicious food; he
              aims to create a welcoming space where guests can enjoy memorable
              moments with family and friends.
            </p>
          </Space>
          <div className="flex flex-wrap">
            <div className=" w-full md:w-1/2 md:pr-2 border-red-900">
              <Image
                src={MarioAndAdrianone}
                alt="Adrian cooking"
                className="mb-4"
              />
            </div>
            <div className=" w-full md:w-1/2 md:pl-2 border-red-900">
              <Image
                src={MarioAndAdriantwo}
                alt="Mario cooking"
                className="mb-4"
              />
            </div>
          </div>

          <p className="mt-4">
            Join us at Little Lemon Chicago for an unforgettable culinary
            journey that blends the best of tradition and innovation.
          </p>
        </Space>
      </Card>
    </div>
  );
};

export default AboutPage;
