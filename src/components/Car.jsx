// import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
// import { Quaternion, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { useControls } from "./useControls";
// import { useWheels } from "./useWheels";
// import { WheelDebug } from "./WheelDebug";

const Car = () => {
  let mesh = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/car.glb"
  ).scene;

  useEffect(() => {
    // if (!result) return;

    // let mesh = result;
    mesh.scale.set(0.0012, 0.0012, 0.0012);

    mesh.children[0].position.set(-365, -18, -67);
  }, [mesh]);

  return <primitive object={mesh} rotation-y={Math.PI} />;
};

export default Car;
