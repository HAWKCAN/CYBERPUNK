import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function CarModel({ url, ...props }) {
  const { scene } = useGLTF(url);

  useEffect(() => {

    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    box.getSize(size);

    const targetSize = 4; 

    const maxDimension = Math.max(size.x, size.y, size.z);
    const scale = targetSize / maxDimension;

    scene.scale.set(scale, scale, scale);

    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);
  }, [scene]);

  return <primitive object={scene} {...props} />;
}
