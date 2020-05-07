// import React from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// const test2 = () => {
//   let renderer;
//   let camera;
//   let controls;
//   let scene;
//   let width = window.innerWidth;
//   let height = window.innerHeight;

//   init();
//   animate();
//   render();

//   function init() {
//     //renderer
//     renderer = new THREE.WebGLRenderer({
//       //canvas: document.getElementById('canvas'),
//       canvas: canvas,
//       antialias: true,
//     });
//     renderer.setClearColor(0x111111);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(width, height);

//     //camera
//     camera = new THREE.PerspectiveCamera(70, width / height, 1000);
//     camera.position.z = 100;

//     //controls
//     controls = new OrbitControls(camera);
//     controls.addEventListener('change', render);

//     //scene
//     scene = new THREE.Scene();

//     //lights
//     const light1 = new THREE.AmbientLight(0xffffff, 0.5);
//     const light2 = new THREE.DirectionalLight(0xffffff);

//     light2.position.set(1, 1, 1);

//     scene.add(light1);
//     scene.add(light2);

//     //window resize
//     window.addEventListener('resize', onWindowResize, false);
//   }

//   function animate() {
//     requestAnimationFrame(animate);
//     controls.update();
//   }

//   function render() {
//     renderer.render(scene, camera);
//   }

//   function onWindowResize() {
//     camera.aspect = width / height;
//     camera.updateProjectionMatrix();
//     renderer.setSize(width, height);
//     controls.handleResize();
//   }

//   return (
//     <canvas id="canvas">
//       <h1>Test 2 page</h1>
//     </canvas>
//   );
// };

// export default test2;

// import React, { Component } from 'react';
// import * as THREE from 'three';

// class Scene extends Component {
//   constructor(props) {
//     super(props);

//     this.start = this.start.bind(this);
//     this.stop = this.stop.bind(this);
//     this.animate = this.animate.bind(this);
//   }

//   componentDidMount() {
//     const width = this.mount.clientWidth;
//     const height = this.mount.clientHeight;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     const geometry = new THREE.BoxGeometry(1, 1, 1);
//     const material = new THREE.MeshBasicMaterial({ color: '#433F81' });
//     const cube = new THREE.Mesh(geometry, material);

//     camera.position.z = 4;
//     scene.add(cube);
//     renderer.setClearColor('#000000');
//     renderer.setSize(width, height);

//     this.scene = scene;
//     this.camera = camera;
//     this.renderer = renderer;
//     this.material = material;
//     this.cube = cube;

//     this.mount.appendChild(this.renderer.domElement);
//     this.start();
//   }

//   componentWillUnmount() {
//     this.stop();
//     this.mount.removeChild(this.renderer.domElement);
//   }

//   start() {
//     if (!this.frameId) {
//       this.frameId = requestAnimationFrame(this.animate);
//     }
//   }

//   stop() {
//     cancelAnimationFrame(this.frameId);
//   }

//   animate() {
//     this.cube.rotation.x += 0.01;
//     this.cube.rotation.y += 0.01;

//     this.renderScene();
//     this.frameId = window.requestAnimationFrame(this.animate);
//   }

//   renderScene() {
//     this.renderer.render(this.scene, this.camera);
//   }

//   render() {
//     return (
//       <div
//         style={{ width: '400px', height: '400px' }}
//         ref={mount => {
//           this.mount = mount;
//         }}
//       />
//     );
//   }
// }

// export default Scene;

import React, { Component } from 'react';
import * as THREE from 'three';

class Scene extends Component {
  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
    //const controls = new THREE.OrbitControls(camera);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: '#433F81' });
    const cube = new THREE.Mesh(geometry, material);

    const light1 = new THREE.AmbientLight(0xffffff, 0.5);
    const light2 = new THREE.DirectionalLight(0xffffff);

    camera.position.z = 5;
    scene.add(cube);
    renderer.setClearColor(0x555555);
    renderer.setSize(width, height);
    light2.position.set(1, 1, 1);
    scene.add(light1);
    scene.add(light2);

    window.addEventListener('resize', this.onWindowResize, false);
    //controls.addEventListener('change', renderer);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.material = material;
    this.cube = cube;
    this.width = width;
    this.height = height;
    //this.controls = controls;

    this.mount.appendChild(this.renderer.domElement);
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  animate() {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  onWindowResize() {
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div
        // style={{ width: '400px', height: '400px' }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default Scene;
