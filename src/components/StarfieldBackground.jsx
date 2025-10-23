'use client';

import { useEffect, useRef } from 'react';

const StarfieldBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const blobsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    // Gradient Blob class
    class GradientBlob {
      constructor(index, total) {
        this.baseX = (canvas.width / (total + 1)) * (index + 1);
        this.baseY = (canvas.height / (total + 1)) * (index + 1);
        this.x = this.baseX;
        this.y = this.baseY;
        this.radius = Math.random() * 200 + 150;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.angle = Math.random() * Math.PI * 2;
        this.angleSpeed = (Math.random() - 0.5) * 0.02;
        this.hue = (index * 360) / total;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update(mouseX, mouseY) {
        // Orbit around base position
        this.angle += this.angleSpeed;
        const orbitRadius = 100;
        this.x = this.baseX + Math.cos(this.angle) * orbitRadius + this.speedX * 10;
        this.y = this.baseY + Math.sin(this.angle) * orbitRadius + this.speedY * 10;

        // Mouse interaction - subtle attraction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 300) {
          const force = (300 - distance) / 300;
          this.x += (dx / distance) * force * 2;
          this.y += (dy / distance) * force * 2;
        }

        // Pulse effect
        this.pulsePhase += this.pulseSpeed;
        this.currentRadius = this.radius + Math.sin(this.pulsePhase) * 30;

        // Keep within bounds
        if (this.baseX < 0) this.baseX = canvas.width;
        if (this.baseX > canvas.width) this.baseX = 0;
        if (this.baseY < 0) this.baseY = canvas.height;
        if (this.baseY > canvas.height) this.baseY = 0;
      }
    }

    // Initialize blobs
    const initBlobs = () => {
      blobsRef.current = [];
      const blobCount = 5;
      for (let i = 0; i < blobCount; i++) {
        blobsRef.current.push(new GradientBlob(i, blobCount));
      }
    };

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initBlobs();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Draw gradient mesh
    const drawGradientMesh = () => {
      // Create base gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGradient.addColorStop(0, 'rgba(10, 25, 47, 1)');
      bgGradient.addColorStop(1, 'rgba(10, 25, 47, 1)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw each blob with radial gradients
      blobsRef.current.forEach((blob, index) => {
        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.currentRadius
        );

        // Color palette based on your theme
        const colors = [
          { r: 100, g: 255, b: 218 }, // Accent cyan
          { r: 45, g: 212, b: 191 },  // Teal
          { r: 56, g: 189, b: 248 },  // Blue
          { r: 139, g: 92, b: 246 },  // Purple
          { r: 236, g: 72, b: 153 },  // Pink
        ];

        const color = colors[index % colors.length];
        
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.15)`);
        gradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, 0.08)`);
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Add subtle overlay for depth
      const overlayGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      overlayGradient.addColorStop(0, 'rgba(10, 25, 47, 0)');
      overlayGradient.addColorStop(1, 'rgba(10, 25, 47, 0.3)');
      ctx.fillStyle = overlayGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Animation loop
    const animate = () => {
      time += 0.01;

      // Update blobs
      blobsRef.current.forEach((blob) => {
        blob.update(mouseRef.current.x, mouseRef.current.y);
      });

      // Draw everything
      drawGradientMesh();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: '#0A192F' }}
    />
  );
};

export default StarfieldBackground;
