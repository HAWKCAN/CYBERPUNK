export default function CarSlider({ onClick, onDoubleClick }) {
  const cars = [
    {
      id: 1,
      name: "MAZDA",
      image: "/picture_model/mazda.jpg",
      model: "/models/mazda.glb",
    },
    {
      id: 2,
      name: "Nissan GTR",
      image: "/picture_model/nissan.jpeg",
      model: "/models/gtr.glb",
    },

    {
      id: 3,
      name: "Porsche",
      image: "/picture_model/nissan.jpeg",
      model: "/models/porsche.glb",
    },
    {
      id: 4,
      name: "lamborghini",
      image: "/picture_model/nissan.jpeg",
      model: "/models/lambor.glb",
    },
  ];

  return (
    <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-none px-10 flex gap-10">
      {cars.map((car) => (
        <div
          key={car.id}
          onClick={() => onClick(car)}
          onDoubleClick={() => onDoubleClick(car)}
          className="inline-block cursor-pointer transition-transform scrollbar-none duration-200 hover:scale-110"
        >
          <img
            src={car.image}
            className="w-[180px] h-[100px] object-contain scrollbar-none drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
          />
          <p className="text-center text-cyan-300 mt-2 font-semibold">
            {car.name}
          </p>
        </div>
      ))}
    </div>
  );
}
