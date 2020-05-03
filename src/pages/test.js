import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';

import '../styles/style.css';

extend({ OrbitControls });

//Controls Component
const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });
  return (
    <orbitControls
      //autoRotate
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  );
};

//Plane component
const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
    <planeBufferGeometry attach="geometry" args={[100, 100]} />
    <meshPhysicalMaterial attach="material" color="pink" />
  </mesh>
);

// Box Component
const Box = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? 'pink' : 'hotpink',
  });
  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <a.mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
      castShadow
    >
      <ambientLight />
      <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      {/* <a.meshBasicMaterial attach="material" color={props.color} /> */}
      <a.meshPhysicalMaterial attach="material" color={props.color} />
    </a.mesh>
  );
};

// House Component
const Home = () => {
  const [model, setModel] = useState();
  useEffect(() => {
    new GLTFLoader().load('/house.glb', setModel);
    //new GLTFLoader().load("../models/james.gltf", setModel)
  }, []);
  //console.log(model);
  //return model ? <primitive scale={[5, 5, 5]} object={model.scene} /> : null;
  return model ? (
    <primitive scale={[10000, 10000, 10000]} object={model.scene} />
  ) : null;
};

export default () => {
  return (
    <Canvas
      //camera={{ position: [0, 0, 3] }}
      camera={{ position: [40, 40, 800] }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      <ambientLight intensity={0.2} />
      {/* <spotLight position={[15, 20, 5]} penumbra={1} castShadow /> */}
      <spotLight position={[0, 90, 90]} penumbra={1} castShadow />
      {/* <fog attach="fog" args={["white", 5, 15]} /> */}
      {/* <Controls /> */}
      {/* <Box /> */}
      {/* <Plane /> */}
      <Home />
    </Canvas>
  );
};
