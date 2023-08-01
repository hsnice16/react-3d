import "./App.css";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="App">
      <Canvas style={{ height: 400 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <OrbitControls />
        <mesh position={[1, 1, 0]}>
          <coneGeometry attach="geometry" args={[2, 5]} />
          <meshNormalMaterial attach="material" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
