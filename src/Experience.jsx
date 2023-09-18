import { Gltf, Sky } from "@react-three/drei";

import { Frame } from "./components/Frame.jsx";
import { Camera } from "./components/Camera.jsx";
import ThreeContent from "./components/ThreeContent.jsx";
import { Canvas } from "@react-three/fiber";

const Experience = () => {
    return (
        <Canvas dpr={[1, 2]} shadows>
            <directionalLight position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />
            <Sky sunPosition={[1, 2, 3]} />

            <Frame
                id="01"
                name={`Veecle\nCar`}
                author="Omar Faruq Tawsif"
                position={[0, 1.85, 0]}
                textColor={0xffff00}
            >
                <ThreeContent>
                    <Gltf src="/VeecleCar.glb" />
                    <Gltf src="/VeecleDock.glb" />
                </ThreeContent>
            </Frame>

            <Frame id="02" name="KLIOVan" author="Omar Faruq Tawsif">
                <ThreeContent>
                    <Gltf src="/KLIOVanFull.glb" />
                </ThreeContent>
            </Frame>

            <Frame
                id="03"
                name="BeeStation"
                author="Omar Faruq Tawsif"
                bg="#d1d1ca"
                position={[0, -1.85, 0]}
                textColor={0xff8e24}
            >
                <ThreeContent>
                    <Gltf src="/BeeStation.glb" />
                </ThreeContent>
            </Frame>

            <Frame
                id="04"
                name="Cube"
                author="Omar Faruq Tawsif"
                bg="#b1acff"
                position={[0, -1.85 * 2, 0]}
            >
                <ThreeContent>
                    <mesh>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={0xff0000} />
                    </mesh>
                </ThreeContent>
            </Frame>

            <Camera />
        </Canvas>
    );
};

export default Experience;
