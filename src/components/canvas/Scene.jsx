import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { r3f } from "../../helpers/global";

const Scene = ({ ...props }) => {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      // camera={{
      //   fov: 45,
      //   near: 0.1,
      //   far: 200,
      //   position: [0, 0, 2.4],
      // }}
      {...props}
    >
      <r3f.Out />
      <Preload all />
    </Canvas>
  );
};

export default Scene;
