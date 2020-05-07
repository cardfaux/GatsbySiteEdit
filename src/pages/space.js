import React, { Suspense, useRef } from 'react';
import { Link } from 'gatsby';
import { Canvas, useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import Layout from '../components/Layout.component';
import SEO from '../components/SEO.component';
import '../styles/style.css';

function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

function ArWing() {
  const group = useRef();
  const { nodes } = useLoader(GLTFLoader, '/arwing.glb');
  useFrame(() => {
    group.current.rotation.y += 0.004;
  });
  return (
    <group ref={group}>
      <mesh visible geometry={nodes.Default.geometry}>
        <meshStandardMaterial
          attach="material"
          color="white"
          roughness={0.3}
          metalness={0.3}
        />
      </mesh>
    </group>
  );
}

export default function App() {
  return (
    <Layout>
      <SEO title="SpaceShip" description="3D SpaceShip" />
      <Canvas style={{ background: '#171717' }}>
        <directionalLight intensity={0.5} />
        <Suspense fallback={<Loading />}>
          <ArWing />
        </Suspense>
      </Canvas>

      {/* <a
        href="https://codeworkshop.dev/blog/2020-03-31-creating-a-3d-spacefox-scene-with-react-three-fiber/"
        className="blog-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Blog Post
      </a> */}
      <Link to="/space2/">space2</Link>
      <Link to="/space/">space</Link>
      <Link to="/ball/">ball</Link>
      <Link to="/blocks/">blocks</Link>
    </Layout>
  );
}
