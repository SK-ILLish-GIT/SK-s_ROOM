import {
  Html,
  ContactShadows,
  PresentationControls,
  useGLTF,
  OrbitControls,
  Text3D,
  Sky,
  Plane,
  useTexture,
  Box,
  useAnimations
} from '@react-three/drei'
import { folder, useControls } from 'leva'
import { DoubleSide } from 'three';
import gsap from 'gsap';
import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber';
/**
 * models
 */
//--------------------laptop------------------------
function Macbook(props) {
  const macbook = useGLTF('./models/laptop/macbook.glb', true)
  return <primitive object={macbook.scene} {...props} />
}

function IMac(props) {
  const imac = useGLTF('./models/laptop/imac2.glb', true)
  return <primitive object={imac.scene} {...props} />
}

//--------------------furniture------------------------
function Table(props) {
  const table = useGLTF('./models/furniture/table.glb', true)
  return <primitive object={table.scene} {...props} />
}
function Chair(props) {
  const chair = useGLTF('./models/furniture/chair.glb', true)
  return <primitive object={chair.scene} {...props} />
}
// function Sofa(props) {
//   const sofaModel = useGLTF('./models/furniture/sofa.glb', true)
//   return <primitive object={sofaModel.scene} {...props} />
// }

function Bookcase(props) {
  const bookcase = useGLTF('./models/furniture/bookcase.glb', true)
  return <primitive object={bookcase.scene} {...props} />
}

function Bed(props) {
  const bed = useGLTF('./models/furniture/bed.glb', true)
  return <primitive object={bed.scene} {...props} />
}


//--------------------hobby------------------------
// function Football(proops) {
//   const football = useGLTF('./models/hobby/football.glb', true)
//   return <primitive object={football.scene} {...proops} />
// }

//--------------------others------------------------
function AC(props) {
  const ac = useGLTF('./models/others/ac.glb', true)
  return <primitive object={ac.scene} {...props} />
}
function Alarm(props) {
  const alarm = useGLTF('./models/others/alarmClock.glb', true)
  return <primitive object={alarm.scene} {...props} />
}
function Cup(props) {
  const cup = useGLTF('./models/others/cup.glb', true)
  return <primitive object={cup.scene} {...props} />
}
function CPU(props) {
  const cpu = useGLTF('./models/others/cpu.glb', true)
  return <primitive object={cpu.scene} {...props} />
}
function Ladder(props) {
  const ladder = useGLTF('./models/others/ladder.glb', true)
  return <primitive object={ladder.scene} {...props} />
}
function Lamp(props) {
  const lamp = useGLTF('./models/others/lamp.glb', true)
  return <primitive object={lamp.scene} {...props} />
}
function Light(props) {
  const light = useGLTF('./models/others/lights.glb', true)
  return <primitive object={light.scene} {...props} />
}
function Painting(props) {
  const painting = useGLTF('./models/others/painting.glb', true)
  return <primitive object={painting.scene} {...props} />
}
function Phone(props) {
  const phone = useGLTF('./models/others/phone.glb', true)
  return <primitive object={phone.scene} {...props} />
}
function PlaneToy(props) {
  const planeToy = useGLTF('./models/others/plane_toy.glb', true)
  return <primitive object={planeToy.scene} {...props} />
}
function Plant(props) {
  const plant = useGLTF('./models/others/plant.glb', true)
  return <primitive object={plant.scene} {...props} />
}
function Router(props) {
  const router = useGLTF('./models/others/router.glb', true)
  return <primitive object={router.scene} {...props} />
}
// function Duck(props) {
//   const duck = useGLTF('./models/others/duck_toy.glb', true)
//   return <primitive object={duck.scene} {...props} />
// }
function Speaker(props) {
  const speaker = useGLTF('./models/others/speaker.glb', true)
  return <primitive object={speaker.scene} {...props} />
}
// function Testing(props) {
//   const testing = useGLTF('./models/chair.glb', true)
//   return <primitive object={testing.scene} {...props} />
// }


/**
 *zoom it close to camera animation
 */
export default function Experience() {
  /**
   * leva
   */
  // const { positionModel, scaleModel, rotationModel, distanceFactor } = useControls({
  //   // IMAC: folder({
  //   //   positionModel: { value: [0, 0, 0], min: -100, max: 100, step: 0.01 },
  //   //   scaleModel: { value: [1, 1, 1], min: 0.0001, max: 10, step: 0.01, lock: true },
  //   //   rotationModel: { value: [0, 0, 0], min: -10, max: 10, step: 0.01 },
  //   // }),
  //   MODEL: folder({
  //     positionModel: { value: [0, 0, 0], min: -100, max: 100, step: 0.01 },
  //     scaleModel: { value: [1, 1, 1], min: 10, max: 1000, step: 5, lock: true },
  //     rotationModel: { value: [0, 0, 0], min: -10, max: 10, step: 0.01 },
  //     distanceFactor: { value: 1, min: 0.0001, max: 10, step: 0.01, lock: true },
  //   }),
  // })
  /**
   * for reference
   */
  // const { nodes, materials, animations } = useGLTF(url)
  // const { ref, mixer, names, actions, clips } = useAnimations(animations)
  // useEffect(() => {
  //   actions?.jump.play()
  // })
  // const { nodes, animations } = useGLTF('./models/others/duck_toy.glb')
  // const { ref, mixer, names, actions, clips } = useAnimations(animations)
  // console.log(animations);
  // useEffect(() => {

  //  })

  /**
   * reference functions
   */
  /**
   * textures
   */
  const propsFloor = useTexture({
    // map: './textures/floor/wood_cabinet_worn_long_arm_1k.jpg',
    // normalMap: './textures/floor/wood_cabinet_worn_long_nor_gl_1k.jpg',
    // roughnessMap: './textures/floor/wood_cabinet_worn_long_rough_1k.jpg',
    // diffuseMap: './textures/floor/wood_cabinet_worn_long_diff_1k.jpg',
    map: './textures/floor/set3/arm.jpg',
    aoMap: './textures/floor/set3/ao.jpg',
    normalMap: './textures/floor/set3/nor_dx.jpg',
    roughnessMap: './textures/floor/set3/rough.jpg',
    diffuseMap: './textures/floor/set3/diff.jpg',
    displacementMap: './textures/floor/set3/disp.jpg'
  })
  const propsWall = useTexture({
    map: './textures/wall/arm.jpg',
    normalMap: './textures/wall/nor_gl.jpg',
    roughnessMap: './textures/wall/rough.jpg',
    diffuseMap: './textures/wall/diff.jpg',
    displacementMap: './textures/wall/disp.jpg'
  })
  return (
    <>
      <color args={['#000000']} attach="background" />
      <Sky
        distance={3000}
        sunPosition={[1, 0, -1]}
        rayleigh={6}
        azimuth={0.25}
        turbidity={8}
      />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={+Math.PI / 2}
        minPolarAngle={Math.PI / 2.5}
        //limit horizontal rotation
        maxAzimuthAngle={-Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        enableDamping={true}
      />



      {/* <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={'#ff6900'}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          /> */}

      {/* <primitive object={computer.scene}
        scale={scaleModel}
        position={positionModel}
        rotation={rotationModel}
      >
        <Html
          transform
          wrapperClass="htmlScreen"
          distanceFactor={1.4}
          rotation-x={-0.256}
        // position={[positionLaptop[0] + 0.1, positionLaptop[1] + 0.1, positionLaptop[2] + 0.1]}
        // onClick={() => window.open('https://portal-omega-ten.vercel.app', '_blank')}
        >
          {/* <iframe src=" https://portal-omega-ten.vercel.app" /> */}
      {/* </Html>
      </primitive> */}
      {/* <Text3D
            font="./fonts/helvetiker_regular.typeface.json"
            size={1}
            position={positionName}
            rotation-y={-1.55}
            maxWidth={3}
          >
            SK
          </Text3D> */}
      {/* models */}

      {/* ------------------furniture --------------------------*/}

      <Table
        position={[1.2, -1.9, -0.35]}
        scale={[0.1535, 0.1535, 0.1535]}
      />
      <Chair
        position={[-0.28, 0, -0.14]}
        scale={[2.09, 2.09, 2.09]}
        rotation={[0, 2.11, 0]}
      />
      <Bookcase
        position={[4.31, -1.29, 1.78]}
        scale={[2.2, 2.2, 2.2]}
        rotation={[0, 0, 0]}
      />
      <Bed
        position={[-3, -1.3, -2.22]}
        scale={[0.8, 0.8, 0.8]}
        rotation={[0, 0, 0]}
      />

      {/* --------------------laptop------------------------------- */}
      <Macbook
        position={[14.94, -3.04, 8.4]}
        scale={[1.42, 1.42, 1.42]}
      />
      <IMac
        position={[3.78, 0.28, -2.29]}
        scale={[.6, .6, .6]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <Html
          //all props
          transform
          wrapperClass="htmlScreen"
          distanceFactor={3.5100000000000002}
          position={[1.0408340855860843e-16, 1.4700000000000004, -0.15999999999999873]}
          // rotation={rotationModel}
          scale={[0.3529999999999981, 0.35299999999999787, 0.35299999999999787]}
        >
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Html>
      </IMac>
      {/*--------------------- others --------------------------------*/}

      <AC
        position={[-2.9, 3.4, -5.06]}
        scale={[0.028, 0.028, 0.028]}
      />
      <Alarm
        position={[-0.42, 0.25, -4.64]}
        scale={[0.05, 0.05, 0.05]}
        rotation={[0, -2.67, 0]}
      />
      <CPU
        position={[1.94, -1.2, -0.48]}
        scale={[10, 10, 10]}
        rotation={[0, 1.9, 0]}
      />
      <Cup
        position={[3.56, 0.29, -1.19]}
        scale={[1.9, 1.9, 1.9]}
      />
      <Ladder
        position={[-3.59, 1.55, 3.88]}
        scale={[0.702, 0.702, 0.702]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Lamp
        position={[-0.44, 0.6, -3.78]}
        scale={[1.25, 1.25, 1.25]}
        rotation={[0, -1.34, 0]}
      />
      <Light
        position={[0, 5.01, 0]}
        scale={[2.05, 2.05, 2.05]}
      />
      <Painting
        position={[1.07, 2.8, -4.86]}
        scale={[1, 1, 1]}
      />
      <Phone
        position={[-0.38, 0.26, -4.08]}
        scale={[0.0022, 0.0022, 0.0022]}
        rotation={[-1.07, -0.02, 0.04]}
      />
      <PlaneToy
        position={[4.18, 2.19, 2]}
        scale={[0.0457, 0.0457, 0.0457]}
        rotation={[-0.08, -1.49, -0.2]}
      />
      <Plant
        position={[4.36, -0.14, 0.33]}
        scale={[0.8, 0.8, 0.8]}
      />
      <Router
        position={[4.56, 0.3, -1.79]}
        scale={[0.002, 0.002, 0.002]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Speaker
        position={[4.67, 0.25, -4.56]}
        scale={[0.0256, 0.0256, 0.0256]}
      />
      {/* <Duck
        position={positionModel}
        scale={scaleModel}
      /> */}
      {/* <Football
        position={positionFootball}
        scale={scaleFootball}
      /> */}
      {/* <Sofa
        position={positionSofa}
        rotation={rotationSofa}
        scale={scaleSofa}
      /> */}

      {/* <Testing
        position={positionModel}
        scale={scaleModel}
        rotation={rotationModel}
      /> */}
      {/* room */}




      {/* --------------------- 1st floor ---------------------------- */}
      {/* <Text3D
        // font="./fonts/helvetiker_regular.typeface.json"
        size={1}
        position={positionModel}
        maxWidth={3}
      >
        COMING SOON...
      </Text3D> */}

      {/* <Box
        position={[-2.5, 2.5, 0]}
        scale={[1, 1, 1]}
        ref={cubeRef}
        onClick={cubeRotationHandler}
      /> */}
      <Box
        position={[5, 2.2, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        args={[10, 7, .2]}
        receiveShadow
      >

        {/* add gradients color to the mesh */}
        <meshBasicMaterial color="#609966" side={DoubleSide} />
      </Box>
      <Box
        position={[0, 2.2, -5]}
        rotation={[0, 0, 0]}
        args={[10, 7, .2]}
        receiveShadow
      >
        <meshBasicMaterial color="#EDF1D6" side={DoubleSide} />
      </Box>
      <Box
        position={[-0.02, 2.2, 4.88]}
        rotation={[0, 0, 0]}
        args={[10, 7, .2]}
        receiveShadow
      >
        <meshBasicMaterial color="#EDF1D6" side={DoubleSide} />
      </Box>
      <Box
        position={[-.1, 5.319999999999991, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        args={[10, 10, .2]}
        receiveShadow
      >
        <meshStandardMaterial
          {...propsFloor}
          displacementScale={0}
          roughness={.1}
          metalness={0.2}
        />
      </Box>
      <Box
        position={[0.05, -1.55, -0.05]}
        rotation={[-Math.PI / 2, 0, 0]}
        args={[10.1, 10.1, .5]}
        receiveShadow
      >
        <meshStandardMaterial
          {...propsFloor}
          displacementScale={0}
          roughness={1}
          metalness={0.6}
        />
      </Box>
      <Plane
        position={[0, -1.78, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        args={[40, 40]}
        receiveShadow
      >
        <meshBasicMaterial color="#9DC08B" side={DoubleSide} />
      </Plane>
      {/* <Plane
        position={positionModel}
        rotation={rotationModel}
        scale={scaleModel}
      ></Plane> */}
      {/* lights */}
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={0.5}
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        castShadow
      />
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  )
}
