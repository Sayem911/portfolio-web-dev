import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Palette, Box, Loader } from 'lucide-react';

const colors = [
  { name: 'Classic Red', value: '#ff4444' },
  { name: 'Ocean Blue', value: '#4477ff' },
  { name: 'Forest Green', value: '#44aa44' },
  { name: 'Royal Purple', value: '#9944ff' },
];

const ProductCustomizer = () => {
  const [color, setColor] = React.useState(colors[0]);

  return (
    <div className="h-[600px] bg-gray-900 flex">
      <div className="w-64 bg-gray-800 border-r border-gray-700 p-4">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Palette className="w-5 h-5" />
          Customize
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Color</label>
            <div className="grid grid-cols-2 gap-2">
              {colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setColor(c)}
                  className={`p-2 rounded-lg border transition-all ${
                    color.name === c.name
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: c.value }}
                    ></div>
                    <span className="text-sm text-gray-300">{c.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Preview</label>
            <div className="p-3 bg-gray-700/30 rounded-lg">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Box className="w-4 h-4" />
                Drag to rotate
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 relative">
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={color.value} />
              </mesh>
            </Stage>
          </Suspense>
          <OrbitControls makeDefault />
        </Canvas>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Loader className="w-8 h-8 animate-spin text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default ProductCustomizer;