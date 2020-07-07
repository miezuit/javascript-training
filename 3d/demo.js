// initializam renderer webgl
var renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0xCCCCCC, 1)

// adaugam canvas-ul renderer-ului in body ca element nou
document.body.appendChild(renderer.domElement)

// definim o scena
var scene = new THREE.Scene()

// definim camera cu unghiul de cuprindere si aspect ratio
var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight)
// setam distanta camerei fata de obiecte
camera.position.z = 50
// adaugam camera la scena
scene.add(camera)


// cream un cub
var qubeForm = new THREE.BoxGeometry(10, 10, 10)
// cream un material simplu dintr-o culoare
var simpleMaterial = new THREE.MeshBasicMaterial({color: 0x214f6d})
// cream cubul concret
var qube = new THREE.Mesh(qubeForm, simpleMaterial)
// punem cubul in scena
scene.add(qube)
// rotim cubul
qube.rotation.set(0.4, 0.2, 0)
// dam mai la stanga cubul
qube.position.x = -30

// cream un torus
// raza, grosime, segment radiale, segmente tubulare
var torusForm = new THREE.TorusGeometry(7, 1.5, 6, 12)
var phongMaterial = new THREE.MeshPhongMaterial({color: 0xb66139})
var torus = new THREE.Mesh(torusForm, phongMaterial)
scene.add(torus)
torus.rotation.set(0.4, 0.4, 0)

// cream un dodecaedru
var ballForm = new THREE.DodecahedronGeometry(8)
var lambertMaterial = new THREE.MeshLambertMaterial({color: 0xe4de32})
var ball = new THREE.Mesh(ballForm, lambertMaterial)
scene.add(ball)
ball.position.x = 30

// cream o lumina dura ca un puct de lumina
// exista si alte tipuri de lumina: Ambient, Hemisphere
var light = new THREE.PointLight(0xffffff)
// pozitionam lumina in spatiu
light.position.x = -10
light.position.y = 50
light.position.z = 50
// adaugam lumina in scena
scene.add(light)

var x = 0

// definim functia de randare a scenei
function render() {
    // inregistreaza functia noastra sa fie apelata pentru fiecare nou frame
    // functia se apeleaza de 60 de ori pe secunda (60fps)
    requestAnimationFrame(render)
    renderer.render(scene, camera)
    qube.rotation.y += 0.01
    x += 0.01
    torus.scale.y = Math.abs(Math.sin(x))
    ball.position.y = 8 * Math.sin(2*x)
}
render()

