
import React, { useEffect, useRef, useState } from 'react';

interface ThreeDTagCloudProps {
    skills: string[];
}

export const ThreeDTagCloud: React.FC<ThreeDTagCloudProps> = ({ skills }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let animationFrameId: number;
        let angleX = 0;
        let angleY = 0;
        
        // Base rotation speed
        let speedX = 0.001; 
        let speedY = 0.001;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            // Calculate mouse position relative to center of container (-1 to 1)
            const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
            
            // Update rotation speed based on mouse position
            // Inverse logic: mouse left -> rotate right
            speedY = x * 0.02; 
            speedX = -y * 0.02;
        };

        const handleMouseLeave = () => {
            speedX = 0.001;
            speedY = 0.001;
        };

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        const animate = () => {
            angleX += speedX;
            angleY += speedY;
            
            setRotation({ x: angleX, y: angleY });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // Spherical distribution
    const tags = skills.map((skill, i) => {
        const phi = Math.acos(-1 + (2 * i + 1) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        
        return {
            id: skill,
            x: 180 * Math.cos(theta) * Math.sin(phi),
            y: 180 * Math.sin(theta) * Math.sin(phi),
            z: 180 * Math.cos(phi),
        };
    });

    return (
        <div 
            ref={containerRef} 
            className="relative w-full h-[400px] flex items-center justify-center perspective-1000"
            style={{ perspective: '1000px' }}
        >
            <div className="relative w-full h-full transform-style-3d flex items-center justify-center">
                 {tags.map((tag) => {
                     // 3D Rotation Matrix Logic
                     const cosX = Math.cos(rotation.x);
                     const sinX = Math.sin(rotation.x);
                     const cosY = Math.cos(rotation.y);
                     const sinY = Math.sin(rotation.y);

                     // Rotate around Y axis
                     let x1 = tag.x * cosY - tag.z * sinY;
                     let z1 = tag.z * cosY + tag.x * sinY;
                     
                     // Rotate around X axis
                     let y1 = tag.y * cosX - z1 * sinX;
                     let z2 = z1 * cosX + tag.y * sinX;

                     const scale = 300 / (300 - z2); // Perspective scaling
                     const alpha = (z2 + 200) / 300; // Opacity based on depth

                     return (
                         <div
                            key={tag.id}
                            className="absolute transform-gpu transition-colors duration-200 cursor-default hover:z-50"
                            style={{
                                transform: `translate3d(${x1}px, ${y1}px, ${z2}px) scale(${scale})`,
                                opacity: Math.max(0.1, Math.min(1, alpha)),
                                zIndex: Math.floor(z2)
                            }}
                         >
                            <span className="text-sm md:text-base font-bold text-cyan-400 bg-black/40 px-3 py-1 rounded border border-cyan-500/30 shadow-[0_0_10px_rgba(0,255,255,0.3)] hover:bg-cyan-500 hover:text-black">
                                {tag.id}
                            </span>
                         </div>
                     );
                 })}
            </div>
        </div>
    );
};
