// var nama = prompt("Masukkan Nama Anda : ");

//  if (nama == null) {
//    window.alert(" Silahkan IsI Nama Anda terlebih Dahulu ");
//  } else {
//    window.alert(" Selamat Datang " + nama + " di Biodata Saya");
//       window.alert(" Anda adalah pengunjung ke 71");
// }

// Three JS 3D
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r114/build/three.module.js' ;

let width = window.innerWidth;
let height = 400;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(25, width / height, 1, 100);

const renderer = new THREE.WebGLRenderer({ 
  antialias: true,
  alpha : 1,
  });

renderer.setSize(width, height);
document.getElementById('myCanvas5').appendChild(renderer.domElement);


renderer.setSize(200 ,200);

camera.position.z = 7;

/* Geometri Material */
const geo = new THREE.BoxGeometry(2, 2, 2);

/* Custom Material */
const ATexture = new THREE.TextureLoader().load('https://res.cloudinary.com/di5fbic64/image/upload/v1652319043/gambarku/WhatsApp-Image-2019-03-04-at-14.26.48-674x1024_ocg5tk.jpg');
const BTexture = new THREE.TextureLoader().load('https://res.cloudinary.com/di5fbic64/image/upload/v1652322644/gambarku/png-transparent-person-holding-badminton-racket-illustration-badminton-smash-logo-illustration-badminton-player-hd-buckle-material-sport-video-player-sports-equipment_xicerz.png');
const CTexture = new THREE.TextureLoader().load('https://res.cloudinary.com/di5fbic64/image/upload/v1652322646/gambarku/albert-einstein-mathematics-special-relativity-formula-wallpaper-preview_w0zbkx.jpg');
const DTexture = new THREE.TextureLoader().load('https://res.cloudinary.com/di5fbic64/image/upload/v1652322680/gambarku/the-sun-rays-sunset-bike-wallpaper-preview_ljskla.jpg');
const ETexture = new THREE.TextureLoader().load('https://res.cloudinary.com/di5fbic64/image/upload/v1652322939/gambarku/mobile-legends-logo-e1630992256662_oburzo.jpg');


const matArray = [
  new THREE.MeshBasicMaterial({ map: ATexture }),
  new THREE.MeshBasicMaterial({ map: BTexture }),
  new THREE.MeshBasicMaterial({ map: CTexture }),
  new THREE.MeshBasicMaterial({ map: DTexture }),
  new THREE.MeshBasicMaterial({ map: ETexture }),
];

let mesh = new THREE.Mesh(geo, matArray);
scene.add(mesh);

/* Lanjutan Custom Material */
// Persegi
const geo2 = new THREE.BufferGeometry();
let vertices = new Float32Array([
  -1.0, -1.0, 0.0, 1.0, -1.0, 0.0, 1.0, 1.0, 0.0,

  1.0, 1.0, 0.0, -1.0, 1.0, 0.0, -1.0, -1.0, 0.0,
]);

let uvs = new Float32Array([
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0,

  1.0, 1.0, 0.0, 1.0, 0.0, 0.0,
]);

window.addEventListener('resize', function () {
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

function update() {
  mesh.rotation.y += 0.01;
  mesh.rotation.x += 0.01;

  requestAnimationFrame(update);
  renderer.render(scene, camera);
}

update();