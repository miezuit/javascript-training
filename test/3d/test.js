var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

// WebGL renderer - randeaza direct in pagina
var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

// scena este locul unde se intampla lucruri
var scene = new THREE.Scene();

// setam camera
// exista mai multe tipuri de camere
// 70 este unghiul vizibil (70 de grade)
// width/height este proportia obiectelor - aspect ratio (ca sa nu fie deformate)
var camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT);
// distanta intre camera si centrul scenei
camera.position.z = 50;
scene.add(camera);

// cutie
var boxGeometry = new THREE.BoxGeometry(10, 10, 10);
// creaza un meterial
var basicMaterial = new THREE.MeshBasicMaterial({color: 0x0095DD});
// adauga materialul cutiei
var cube = new THREE.Mesh(boxGeometry, basicMaterial);
// adauga cubul la scena
scene.add(cube);
// rotim cubul
cube.rotation.set(0.4, 0.2, 0);

cube.position.x = -25;

// radius, tube diameter, radial segment count, and tubular segment count
var torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
var phongMaterial = new THREE.MeshPhongMaterial({color: 0xFF9500});
var torus = new THREE.Mesh(torusGeometry, phongMaterial);
scene.add(torus);

var dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
var lambertMaterial = new THREE.MeshLambertMaterial({color: 0xEAEFF2});
var dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);

// adaugam lumina
// point light este ca un blit
// exista si alte lumini: Ambient, Directional, Hemisphere, Spot
var light = new THREE.PointLight(0xFFFFFF);
light.position.set(-10, 15, 50);
scene.add(light);

// randarea
var t = 0;

function render() {
    // inregistreaza aceasta functie cu browser-ul
    // atunci cand browser-ul este gata sa randeze urmatorul frame
    // ve cheama aceasta functie
    // in mod normal functia e chemata de 60 de ori pe secunda (60fps)
	requestAnimationFrame(render);
    renderer.render(scene, camera);
    // animatii:
    cube.rotation.y += 0.01;
    t += 0.01;
    torus.scale.y = Math.abs(Math.sin(t));
    dodecahedron.position.y = -7 * Math.sin(t*2);
}
render();


