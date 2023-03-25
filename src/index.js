import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import { Fog } from 'three'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Canvas
            camera={{
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [-10, 8, 9],
            }}
        >
            <Suspense fallback={null}><Experience /></Suspense>

        </Canvas>
        <Loader />
    </>
)