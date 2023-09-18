import { styled } from "styled-components";
import { Suspense } from "react";
import { Gltf } from "@react-three/drei";

import { FeedContainer, FeedContentContainer } from "./MainFeed";
import Navigation from "./Navigation";
import Misc from "./Misc";
import View from "../canvas/View";
import Frame from "../Frame";
import FrameContent from "../FrameContent";
import Common from "../canvas/Common";

const LayoutContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Page = () => {
    return (
        <LayoutContainer>
            <Navigation />

            <FeedContainer>
                <FeedContentContainer>
                    <View>
                        <Suspense fallback={null}>
                            <Frame
                                id="00"
                                name={`Veecle Car`}
                                author="Gavin Quach"
                                textColor={0xffff00}
                                bgColor={0xffccff}
                            >
                                <FrameContent>
                                    <Gltf src="/VeecleCar.glb" />
                                    <Gltf src="/VeecleDock.glb" />
                                </FrameContent>
                            </Frame>
                            {/* <mesh>
                                <boxGeometry args={[0.6, 0.6, 0.6]} />
                                <meshStandardMaterial color={0x00ff00} />
                            </mesh> */}
                            <Common id="00" sky />
                        </Suspense>
                    </View>
                </FeedContentContainer>
                <FeedContentContainer>
                    <View>
                        <Suspense fallback={null}>
                            <Frame
                                id="01"
                                name={`KLIO Van`}
                                author="John Doe"
                                textColor={0xffffdd}
                                bgColor={0xaaffff}
                            >
                                <FrameContent>
                                    <Gltf src="/KLIOVanFull.glb" />
                                </FrameContent>
                            </Frame>
                            {/* <mesh>
                                <boxGeometry args={[0.6, 0.6, 0.6]} />
                                <meshStandardMaterial color={0xffff00} />
                            </mesh> */}
                            <Common id="01" sky />
                        </Suspense>
                    </View>
                </FeedContentContainer>
                <FeedContentContainer>
                    <View>
                        <Suspense fallback={null}>
                            <Frame
                                id="02"
                                name={`KLIO Van &\nVeecle Car`}
                                author="My Project"
                                textColor={0xffff00}
                                bgColor={0xffffff}
                            >
                                <FrameContent>
                                    <Gltf src="/KLIOVanFull.glb" />
                                    <Gltf src="/VeecleDock.glb" />
                                </FrameContent>
                            </Frame>
                            {/* <mesh>
                                <boxGeometry args={[0.6, 0.6, 0.6]} />
                                <meshStandardMaterial color={0xff00ff} />
                            </mesh> */}
                            <Common id="02" sky />
                        </Suspense>
                    </View>
                </FeedContentContainer>
            </FeedContainer>

            <Misc />
        </LayoutContainer>
    );
};

export default Page;