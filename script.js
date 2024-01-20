import * as THREE from 'three'

//fetch the Canavs object from the html index.htnl script. It means here targeting a canvas element if this canvas element is a 'webgl class'.
const canvas = document.querySelector('canvas.webgl')

// console.log(THREE)

//Create a Scene object which will later on be rendered. The Scen objects is like a container. It contains the Meshes(Object+Material)
const redCubeScene = new THREE.Scene()

//Create a Cube/BoxGeometry
const redCubeObject = new THREE.BoxGeometry(1, 1, 1)

//Create a material for the Cube/BoxGeometry
const redCubeMaterial = new THREE.MeshBasicMaterial({
    color: 'red',
    //wireframe: true
})

//Create a Mesh which is the combination of the Cube with the Material 
const redCubeMesh = new THREE.Mesh(redCubeObject, redCubeMaterial)
redCubeScene.add(redCubeMesh)

//sizes for camera parameters
const sizes = {
    width : 800,
    height : 600
}

// Create type of camera wiht two parameters(field of view, aspect ratio)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
//postioned the camera in the canvas. COuld have move the cube instead also.
const camera_position = {
    x: 0,
    y: 0,
    z: 3
}
camera.position.x = camera_position.x
camera.position.y = camera_position.y
camera.position.z = camera_position.z

//Add the camera to the scene
redCubeScene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

//Need to adjust the size of the canvas
renderer.setSize(sizes.width, sizes.height)

//Render is the combination of a scene with a camera. However, by default object and camera are at the coordinate (0,0,0,).
//and it is not possible to see an object from inside. We thus need to move the camera or the object.
//Must define the position before adding to the scene.
renderer.render(redCubeScene, camera)