import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import Car from "./Car";
import Ground from "./Ground";
import Track from "./Track";

const Scene = () => {
  const [thirdPerson, setThirdPerson] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);

  return (
    <Suspense fallback={null}>
      <Environment
        files={process.env.PUBLIC_URL + "/textures/envmap.hdr"}
        background={"both"}
      />

      <PerspectiveCamera makeDefault position={cameraPosition} fov={40} />
      {/* {!thirdPerson && ( */}
      <OrbitControls target={[-2.64, -0.71, 0.03]} />
      {/*  )} */}

      <Ground />
      <Track />
      <Car thirdPerson={thirdPerson} />
    </Suspense>
  );
};

export default Scene;
