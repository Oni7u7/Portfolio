"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Campo de puntos ámbar que "respira" como una onda, con parallax al mover el mouse.
export default function Background3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const BG = 0x100e0b;
    const AMBER = 0xe6b25e;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(BG, 0.028);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    camera.position.set(0, 7, 22);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // grid de puntos
    const COUNT = 80;
    const SEP = 1.15;
    const positions = [];
    for (let i = 0; i < COUNT; i++) {
      for (let j = 0; j < COUNT; j++) {
        positions.push((i - COUNT / 2) * SEP, 0, (j - COUNT / 2) * SEP);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: AMBER,
      size: 0.09,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
      fog: true,
    });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // parallax con el mouse
    let mx = 0, my = 0, tx = 0, ty = 0;
    const onMove = (e) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onMove);

    const arr = geo.attributes.position.array;
    const wave = (t) => {
      for (let idx = 0; idx < arr.length; idx += 3) {
        const x = arr[idx];
        const z = arr[idx + 2];
        const d = Math.sqrt(x * x + z * z);
        arr[idx + 1] =
          Math.sin(d * 0.32 - t * 1.1) * 0.9 + Math.sin(x * 0.16 + t * 0.55) * 0.35;
      }
      geo.attributes.position.needsUpdate = true;
    };

    const clock = new THREE.Clock();
    let raf;
    const loop = () => {
      const t = clock.getElapsedTime();
      wave(t);
      tx += (mx * 4 - tx) * 0.04;
      ty += (-my * 2 - ty) * 0.04;
      camera.position.x = tx;
      camera.position.y = 7 + ty;
      camera.lookAt(0, 0, -4);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };

    if (reduce) {
      wave(1.2);
      camera.lookAt(0, 0, -4);
      renderer.render(scene, camera);
    } else {
      loop();
    }

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // limpieza al desmontar
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 block"
      aria-hidden="true"
    />
  );
}
