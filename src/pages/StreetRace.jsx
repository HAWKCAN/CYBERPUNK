import { useState } from "react";
import { ButtonStyle, CarSlider, CarViewer } from "../components";

export default function StreetRace() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [focusMode, setFocusMode] = useState(false);

  const handleCarClick = (car) => {
    setSelectedCar(car);
    setFocusMode(false);
  };

  const handleCarDoubleClick = () => {
    setFocusMode(true);
  };

  return (
    <div className="relative w-dvw h-dvh bg-[url('/street.jpg')] bg-cover bg-center text-white overflow-hidden">
      <div className="absolute top-5 left-5 z-50">
        <ButtonStyle name="Logout" to="/" />
      </div>

      <h1 className="absolute top-5 right-10 text-4xl font-bold text-cyan-300 tracking-widest z-40">
        STREET RACING
      </h1>

      {selectedCar && (
        <div
          className="absolute inset-0 flex justify-center items-end pointer-events-none"
          style={{ background: "transparent", backgroundColor: "transparent" }}
        >
          <div className="pointer-events-auto">
            <CarViewer car={selectedCar} focus={focusMode} />
          </div>
        </div>
      )}

      <div className="absolute bottom-10 left-120 scrollbar-none max-w-full z-50">
        <CarSlider
          onClick={handleCarClick}
          onDoubleClick={handleCarDoubleClick}
          className="scrollbar-none"
        />
      </div>
    </div>
  );
}
