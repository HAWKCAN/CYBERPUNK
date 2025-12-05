// CarViewer.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CarModel from "./CarModel";

export default function CarViewer({ car }) {
  return (
    <div
      className="w-[55vw] h-[45vh]"
      style={{ background: "transparent", backgroundColor: "transparent" }}
    >
      <Canvas
        camera={{ position: [0, 0.4, 5], fov: 40 }}
        gl={{ alpha: true, premultipliedAlpha: false }}
        style={{ background: "transparent", backgroundColor: "transparent" }}
      >


        <ambientLight intensity={1.4} />
        <directionalLight position={[5, 5, 5]} intensity={2.5} />

        <CarModel url={car.model} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
