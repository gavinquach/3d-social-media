import { Stage } from "@react-three/drei";

const FrameContent = ({ children }) => {
    return (
        <Stage
            intensity={0.5}
            preset="rembrandt"
            shadows="contact"
            adjustCamera={false}
            environment="city"
            center
        >
            {children}
        </Stage>
    );
};

export default FrameContent;
