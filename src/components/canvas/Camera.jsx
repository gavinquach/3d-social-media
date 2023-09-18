import { Vector3 } from "three";
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { useRoute } from "wouter";

const Camera = ({
    id,
    position = [0, 0, 2.4],
    focus = [0, 0, 0],
    ...props
}) => {
    const controlsRef = useRef();
    const [, params] = useRoute("/item/:id");

    const camera = useThree((state) => state.camera);
    const scene = useThree((state) => state.scene);
    const size = useThree((state) => state.size);

    useEffect(() => {
        camera.updateProjectionMatrix();
    }, [size]);

    useEffect(() => {
        const positionVector = new Vector3(position[0], position[1], position[2]);
        const focusVector = new Vector3(focus[0], focus[1], focus[2]);

        const active = scene.getObjectByName(params?.id);
        if (active) {
            // camera position
            active.parent.localToWorld(positionVector.set(0, 0.5, 7));

            // object's target position for camera
            active.parent.localToWorld(focusVector.set(0, 0, 0));
        }

        const controls = controlsRef.current;

        if (controls) {
            if (active) {
                controls.dollySpeed = 1;
                controls.azimuthRotateSpeed = 1;
                controls.polarRotateSpeed = 1;
                controls.minDistance = 0.5;
                controls.maxDistance = 20;
                controls.minAzimuthAngle = -Infinity;
                controls.maxAzimuthAngle = Infinity;
                controls.minPolarAngle = 0;
                controls.maxPolarAngle = Math.PI;
            } else {
                controls.dollySpeed = 0.4;
                controls.azimuthRotateSpeed = 0.2;
                controls.polarRotateSpeed = 0.2;
                controls.minDistance = 2;
                controls.maxDistance = 2.8;
                controls.minAzimuthAngle = -Math.PI / 5; // limit looking right
                controls.maxAzimuthAngle = Math.PI / 5; // limit looking left
                controls.minPolarAngle = Math.PI / 2.6; // limit looking down
                controls.maxPolarAngle = Math.PI / 1.7; // limit looking up
            }
            // camera position outer
            controls.setLookAt(...positionVector.toArray(), ...focusVector.toArray(), true);
        }
    });

    return (
        <CameraControls
            ref={controlsRef}
            dollyDragInverted
            dollySpeed={0.4}
            azimuthRotateSpeed={0.2}
            polarRotateSpeed={0.2}
            minDistance={2}
            maxDistance={2.8}
            minAzimuthAngle={-Math.PI / 5} // limit looking right
            maxAzimuthAngle={Math.PI / 5} // limit looking left
            minPolarAngle={Math.PI / 2.6} // limit looking down
            maxPolarAngle={Math.PI / 1.7} // limit looking up
            {...props}
        />
    );
};

export default Camera;
