import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { mapTextureBase64 } from '../assets/mapTexture';

const MapCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.set(0, 8, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(mount.clientWidth, mount.clientHeight);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0px';
    labelRenderer.domElement.style.pointerEvents = 'none';
    mount.appendChild(labelRenderer.domElement);
    
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.3;
    controls.target.set(0, 0, 0);
    controls.maxPolarAngle = Math.PI / 2.1;


    // Map Plane
    const textureLoader = new THREE.TextureLoader();
    const mapTexture = textureLoader.load(mapTextureBase64);
    const planeGeo = new THREE.PlaneGeometry(20, 20);
    const planeMat = new THREE.MeshBasicMaterial({ map: mapTexture });
    const plane = new THREE.Mesh(planeGeo, planeMat);
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    // Marker Sprite
    const createGlowSprite = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const context = canvas.getContext('2d')!;
        const gradient = context.createRadialGradient(
            canvas.width / 2, canvas.height / 2, 0,
            canvas.width / 2, canvas.height / 2, canvas.width / 2
        );
        gradient.addColorStop(0, 'rgba(255, 0, 127, 1)');
        gradient.addColorStop(0.5, 'rgba(255, 0, 127, 0.5)');
        gradient.addColorStop(1, 'rgba(255, 0, 127, 0)');

        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);

        return new THREE.CanvasTexture(canvas);
    };

    const spriteMat = new THREE.SpriteMaterial({
        map: createGlowSprite(),
        blending: THREE.AdditiveBlending,
    });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(2, 2, 2);
    sprite.position.y = 0.1;
    scene.add(sprite);
    
    // Location Label
    const locationDiv = document.createElement('div');
    locationDiv.className = 'text-[#ff007f] text-center p-2 rounded-md bg-[#1a0933]/50';
    locationDiv.style.textShadow = '0 0 5px #ff007f';
    locationDiv.innerHTML = `UIT, Hlaing Campus<br/>Parami Road, Yangon`;

    const locationLabel = new CSS2DObject(locationDiv);
    locationLabel.position.set(0, 1, 0);
    scene.add(locationLabel);

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = Date.now() * 0.005;
      sprite.position.y = Math.sin(time) * 0.2 + 0.4; // Pulsating effect
      controls.update();
      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
        if (!mountRef.current) return;
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        
        renderer.setSize(width, height);
        labelRenderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      if (mount.contains(labelRenderer.domElement)) {
        mount.removeChild(labelRenderer.domElement);
      }
      controls.dispose();
      planeGeo.dispose();
      planeMat.dispose();
      spriteMat.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default MapCanvas;
