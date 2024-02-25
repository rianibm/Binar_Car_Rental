// src/components/Card.tsx
import React from "react";
import { Card } from "antd/lib";
interface CardProps {
  name: string;
  price: string;
  type: string;
  transmission: string;
  description: string;
  year: number;
  image: string;
}

const App: React.FC<CardProps> = ({
  name,
  price,
  type,
  transmission,
  description,
  year,
  image,
}) => (
  <Card style={{ width: 300 }} className="hover:shadow-sm">
    {/* <img src={imageUrl} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>{} */}
  </Card>
);

export default App;
