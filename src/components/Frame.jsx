import { useRef, useState } from "react";
import { extend, useFrame } from "@react-three/fiber";
import {
    BBAnchor,
    useCursor,
    MeshPortalMaterial,
    Text,
} from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import { easing, geometry } from "maath";
import { DoubleSide } from "three";

extend(geometry);

const Frame = ({
    id,
    name,
    author,
    bgColor = null,
    width = 1.3,
    height = 1.61803398875,
    textColor = 0xffffff,
    children,
    ...props
}) => {
    const portal = useRef();
    const [, setLocation] = useLocation();
    const [, params] = useRoute("/item/:id");
    const [hovered, hover] = useState(false);

    useCursor(hovered);

    useFrame((_, delta) =>
        easing.damp(portal.current, "blend", params?.id === id ? 1 : 0, 0.2, delta)
    );

    return (
        <group {...props}>
            {/* Snap name to the top left corner of the frame */}
            <BBAnchor anchor={[-0.9, 0.9, 0]}>
                <Text
                    fontSize={0.15}
                    anchorY="top"
                    anchorX="left"
                    color={textColor}
                    material-toneMapped={false}
                    position-z={0.015}
                >
                    {name}
                </Text>
            </BBAnchor>

            {/* Snap id to the bottom right corner of the frame */}
            {/* <BBAnchor anchor={[0.9, -0.9, 0]}>
                <Text
                    fontSize={0.1}
                    anchorX="right"
                    material-toneMapped={false}
                >
                    /{id}
                </Text>
            </BBAnchor> */}

            {/* Snap author to the bottom left corner of the frame */}
            <BBAnchor anchor={[-0.9, -0.9, 0]}>
                <Text
                    fontSize={0.09}
                    anchorY="bottom"
                    anchorX="left"
                    material-toneMapped={false}
                    position-z={0.015}
                >
                    {author}
                </Text>
            </BBAnchor>

            <mesh
                name={id}
                onDoubleClick={(e) => {
                    e.stopPropagation();
                    setLocation("/item/" + e.object.name);
                }}
                onPointerOver={() => hover(true)}
                onPointerOut={() => hover(false)}
            >
                <roundedPlaneGeometry args={[width, height, 0.1]} />
                <MeshPortalMaterial
                    ref={portal}
                    events={params?.id === id}
                    side={DoubleSide}
                >
                    {bgColor && <color attach="background" args={[bgColor]} />}
                    {children}
                </MeshPortalMaterial>
            </mesh>
        </group>
    );
};

export default Frame;
