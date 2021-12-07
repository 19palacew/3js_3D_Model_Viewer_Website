import * as THREE from "js\three.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

document.addEventListener('keydown', event => {
  if (event.code === 'KeyD') {
    cube.position.x = cube.position.x + (1 - cube.position.x) * 0.1 ;
  }
  if (event.code === 'KeyA') {
    cube.position.x -= 0.1;
    animate();
  }
  if (event.code === 'Space') {
    camera.position.y += 0.1;
  }
})

function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}
animate();
