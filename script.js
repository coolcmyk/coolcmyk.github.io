// Basic Three.js setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// GLTF Loader
const loader = new THREE.GLTFLoader();
let model;
loader.load('kaela.glb', function (gltf) {
    model = gltf.scene;
    scene.add(model);
}, undefined, function (error) {
    console.error(error);
});


// Camera position
camera.position.z = 5;
renderer.setClearColor(0xffffff); // Sets background color to white (0xffffff is hexadecimal for white)

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    if (model) {
        model.rotation.y += 0.09; // Rotate the model around its Y-axis
    }
    renderer.render(scene, camera);
}
animate();
