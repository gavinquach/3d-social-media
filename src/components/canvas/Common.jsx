import { Suspense } from "react";
import { PerspectiveCamera, Sky } from "@react-three/drei";
import Camera from "./Camera";

const Common = ({ color, sky }) => (
    <Suspense fallback={null}>
        {color && <color attach="background" args={[color]} />}

        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 5]} intensity={1.5} />

        {sky && <Sky sunPosition={[100, 50, 100]} />}

        <PerspectiveCamera
            makeDefault
            fov={45}
            near={0.1}
            far={200}
            position={[0, 0, 2.4]}
        />
        <Camera />
    </Suspense>
);

export default Common;
