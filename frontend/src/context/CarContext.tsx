// src/context/CarContext.tsx
import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import Car from "../../../server/src/models/CarModel";

interface CarContextProps {
  cars: Car[];
  fetchCars: () => void;
}

const CarContext = createContext<CarContextProps | undefined>(undefined);

export const CarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cars, setCars] = useState<Car[]>([]);

  const fetchCars = async () => {
    // Fetch data from backend
    const response = await fetch("/api/cars");
    const data = await response.json();
    setCars(data);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <CarContext.Provider value={{ cars, fetchCars }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error("useCarContext must be used within a CarProvider");
  }
  return context;
};
