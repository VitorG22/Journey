import * as THREE from 'three'

import { OrbitControls } from './jsm/OrbitControls'
import { GLTFLoader } from "./jsm/GLTFLoader.js"


export function Render3DObject(object) {

    const canvas = document.getElementById("ThreeJsCanvas")
    const canvasContainer = document.getElementById("ThreeJsCanvasContainer")

    const scene = new THREE.Scene();
    scene.opacity = 0

    const camera = new THREE.PerspectiveCamera(
        75,
        canvas.clientWidth / canvas.clientHeight,
        0.1,
        1000
    )


    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    })




    renderer.setClearColor(0x000000, 0)
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    canvasContainer.appendChild(renderer.domElement)

    if (canvasContainer.childNodes.length >= 3) {
        canvasContainer.removeChild(canvasContainer.children[1])
    }

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.005;
    // controls.minDistance = 2
    // controls.maxDistance = 5
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.7;


    const ambientLight = new THREE.AmbientLight(0x777777 , 0.5)
    scene.add(ambientLight)

    const spotLight = new THREE.SpotLight(0xffffff , 1500)
    spotLight.castShadow = true;
    spotLight.position.set(50, 50, 50)
    scene.add(spotLight)

    /*-------------------loader----------------------*/


    const loader = new GLTFLoader().setPath('models/')
    loader.load(object, function (glb) {
        scene.add(glb.scene);

        var box = new THREE.Box3().setFromObject(glb.scene)
        var obj_size = box.getSize(new THREE.Vector3(0, 0, 0))

        camera.position.z = obj_size.length() * .5;
        controls.minDistance = obj_size.length() * .5
        controls.maxDistance = obj_size.length() * .6

        box.getCenter(controls.target)
    })


    window.onresize = function () {
        camera.aspect = canvas.clientWidth / canvas.clientHeight
        
        camera.updateProjectionMatrix()

        renderer.setSize(canvas.clientWidth, canvas.clientHeight)

    }


    const animate = () => {


        renderer.render(scene, camera)
        controls.update()

        window.requestAnimationFrame(animate)
    }
    animate()


}