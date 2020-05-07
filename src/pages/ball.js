import React from 'react';
import { Link } from 'gatsby';
import { Canvas } from 'react-three-fiber';

import Layout from '../components/Layout.component';
import SEO from '../components/SEO.component';
import '../styles/style.css';

// Geometry
function GroundPlane() {
  return (
    // <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}
function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}
function Sphere() {
  return (
    <mesh
      visible
      userData={{ test: 'hello' }}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      castShadow
    >
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        roughness={0.1}
        metalness={0.5}
      />
    </mesh>
  );
}

// Lights
function KeyLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}
function FillLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      intensity={brightness}
      color={color}
      position={[2, 1, 4]}
      lookAt={[0, 0, 0]}
      penumbra={2}
      castShadow
    />
  );
}

function RimLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={brightness}
      color={color}
      position={[1, 4, -2]}
      rotation={[0, 180, 0]}
      castShadow
    />
  );
}
export default function App() {
  return (
    <Layout>
      <SEO title="Sphere" description="3D Sphere" />
      <Canvas className="canvas">
        <GroundPlane />
        <BackDrop />
        <KeyLight brightness={5.6} color={'#2B8AE6'} />
        <FillLight brightness={2.6} color={'#bdefff'} />
        <RimLight brightness={54} color={'#fff'} />
        <Sphere />
      </Canvas>
      <Link to="/space2/">space2</Link>
      <Link to="/space/">space</Link>
      <Link to="/ball/">ball</Link>
      <Link to="/blocks/">blocks</Link>
    </Layout>
  );
}
