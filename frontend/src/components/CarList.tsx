// src/components/CarList.tsx
import React, { useEffect } from "react";
import { useCarContext } from "../context/CarContext";

const CarList: React.FC = () => {
  const { cars } = useCarContext();

  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.manufacture} - {car.model}
          </li>
        ))}
      </ul>
    </div>
  );
};
