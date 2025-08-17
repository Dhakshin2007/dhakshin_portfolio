import React, { useRef, useEffect, useState } from 'react';

const GAME_WIDTH = 800;
const GAME_HEIGHT = 450;

// Player properties
const PLAYER_WIDTH = 40;
const PLAYER_HEIGHT = 60;
const PLAYER_X = GAME_WIDTH * 0.1;
const JUMP_POWER = -16;
const GRAVITY = 0.7;

// Obstacle properties
const OBSTACLE_MIN_WIDTH = 30;
const OBSTACLE_MAX_WIDTH = 60;
const OBSTACLE_MIN_HEIGHT = 40;
const OBSTACLE_MAX_HEIGHT = 120;
const OBSTACLE_SPEED_INITIAL = 5;
const MIN_SPAWN_INTERVAL = 90; // frames
const MAX_SPAWN_INTERVAL = 150; // frames

export const CyberRunnerGame: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [gameState, setGameState] = useState<'idle' | 'running' | 'over'>('idle');
    const [score, setScore] = useState(0);

    // Using refs for game variables to avoid re-renders in the game loop
    const playerY = useRef(GAME_HEIGHT - PLAYER_HEIGHT - 10);
    const playerVelY = useRef(0);
    const obstacles = useRef<{ x: number, y: number, width: number, height: number }[]>([]);
    const frameCount = useRef(0);
    const gameSpeed = useRef(OBSTACLE_SPEED_INITIAL);
    const nextSpawnFrame = useRef(0);

    const resetGame = () => {
        playerY.current = GAME_HEIGHT - PLAYER_HEIGHT - 10;
        playerVelY.current = 0;
        obstacles.current = [];
        frameCount.current = 0;
        gameSpeed.current = OBSTACLE_SPEED_INITIAL;
        setScore(0);
        setGameState('running');
        nextSpawnFrame.current = MIN_SPAWN_INTERVAL;
    };
    
    const handleUserAction = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        if (gameState === 'idle' || gameState === 'over') {
            resetGame();
        } else if (gameState === 'running' && playerY.current >= GAME_HEIGHT - PLAYER_HEIGHT - 10) { // Only jump if on the ground
            playerVelY.current = JUMP_POWER;
        }
    };
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        let animationFrameId: number;
        
        const gameLoop = () => {
            animationFrameId = requestAnimationFrame(gameLoop);
            if (gameState !== 'running') {
                drawUi(ctx);
                return;
            }

            frameCount.current++;
            setScore(prev => prev + 0.1);

            // Clear canvas & draw background
            drawBackground(ctx);

            // Update and draw player
            playerVelY.current += GRAVITY;
            playerY.current += playerVelY.current;
            if (playerY.current > GAME_HEIGHT - PLAYER_HEIGHT - 10) {
                playerY.current = GAME_HEIGHT - PLAYER_HEIGHT - 10;
                playerVelY.current = 0;
            }
            drawPlayer(ctx);

            // Spawn obstacles
            if (frameCount.current > nextSpawnFrame.current) {
                spawnObstacle();
                nextSpawnFrame.current = frameCount.current + Math.floor(Math.random() * (MAX_SPAWN_INTERVAL - MIN_SPAWN_INTERVAL) + MIN_SPAWN_INTERVAL);
            }

            // Update, draw, and check collision for obstacles
            updateObstacles(ctx);
            
            // Increase speed over time
            gameSpeed.current += 0.002;

            // Draw score
            drawScore(ctx);
        };

        const spawnObstacle = () => {
            const height = Math.random() * (OBSTACLE_MAX_HEIGHT - OBSTACLE_MIN_HEIGHT) + OBSTACLE_MIN_HEIGHT;
            const width = Math.random() * (OBSTACLE_MAX_WIDTH - OBSTACLE_MIN_WIDTH) + OBSTACLE_MIN_WIDTH;
            obstacles.current.push({ x: GAME_WIDTH, y: GAME_HEIGHT - height - 10, width, height });
        };

        const updateObstacles = (ctx: CanvasRenderingContext2D) => {
             for (let i = obstacles.current.length - 1; i >= 0; i--) {
                const obs = obstacles.current[i];
                obs.x -= gameSpeed.current;
                drawObstacle(ctx, obs);

                // Collision detection
                if (
                    PLAYER_X < obs.x + obs.width &&
                    PLAYER_X + PLAYER_WIDTH > obs.x &&
                    playerY.current < obs.y + obs.height &&
                    playerY.current + PLAYER_HEIGHT > obs.y
                ) {
                    setGameState('over');
                }

                // Remove off-screen obstacles
                if (obs.x + obs.width < 0) {
                    obstacles.current.splice(i, 1);
                }
            }
        }
        
        const drawBackground = (ctx: CanvasRenderingContext2D) => {
            const gradient = ctx.createLinearGradient(0, 0, 0, GAME_HEIGHT);
            gradient.addColorStop(0, '#0d0d0d');
            gradient.addColorStop(1, '#1a237e');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
            // Floor
            ctx.fillStyle = '#00FFFF';
            ctx.fillRect(0, GAME_HEIGHT - 10, GAME_WIDTH, 10);
            ctx.fillStyle = 'rgba(0, 255, 255, 0.2)';
            ctx.fillRect(0, GAME_HEIGHT-10, GAME_WIDTH, 2);
        };
        
        const drawPlayer = (ctx: CanvasRenderingContext2D) => {
            ctx.fillStyle = '#00FFFF';
            ctx.shadowColor = '#00FFFF';
            ctx.shadowBlur = 15;
            ctx.fillRect(PLAYER_X, playerY.current, PLAYER_WIDTH, PLAYER_HEIGHT);
            ctx.shadowBlur = 0;
        };
        
        const drawObstacle = (ctx: CanvasRenderingContext2D, obs: {x: number, y: number, width: number, height: number}) => {
            ctx.fillStyle = '#FF00FF';
            ctx.shadowColor = '#FF00FF';
            ctx.shadowBlur = 15;
            ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
            ctx.shadowBlur = 0;
        };

        const drawScore = (ctx: CanvasRenderingContext2D) => {
            ctx.font = "bold 24px 'Orbitron', sans-serif";
            ctx.fillStyle = '#FFFFFF';
            ctx.textAlign = 'left';
            ctx.fillText(`Score: ${Math.floor(score)}`, 20, 40);
        };
        
        const drawUi = (ctx: CanvasRenderingContext2D) => {
            drawBackground(ctx);
            
            ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
            ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

            ctx.font = "bold 48px 'Orbitron', sans-serif";
            ctx.fillStyle = '#00FFFF';
            ctx.textAlign = 'center';
            
            if (gameState === 'idle') {
                ctx.fillText('CYBER RUNNER', GAME_WIDTH / 2, GAME_HEIGHT / 2 - 40);
                ctx.font = "24px 'Roboto', sans-serif";
                ctx.fillText('Click or Tap to Start', GAME_WIDTH / 2, GAME_HEIGHT / 2 + 20);
            } else if (gameState === 'over') {
                ctx.fillText('GAME OVER', GAME_WIDTH / 2, GAME_HEIGHT / 2 - 60);
                ctx.font = "32px 'Orbitron', sans-serif";
                ctx.fillText(`Score: ${Math.floor(score)}`, GAME_WIDTH / 2, GAME_HEIGHT / 2);
                ctx.font = "24px 'Roboto', sans-serif";
                ctx.fillText('Click or Tap to Play Again', GAME_WIDTH / 2, GAME_HEIGHT / 2 + 60);
            }
        }
        
        gameLoop();
        
        return () => cancelAnimationFrame(animationFrameId);
    }, [gameState, score]);

    return (
        <div className="flex flex-col items-center">
            <p className="text-lg text-gray-400 mb-4 text-center">A simple infinite runner. Click or tap to jump over the obstacles!</p>
            <div className="w-full max-w-4xl aspect-video glass-panel p-2 rounded-xl shadow-lg shadow-cyan-500/10">
                <canvas 
                    ref={canvasRef}
                    width={GAME_WIDTH}
                    height={GAME_HEIGHT}
                    className="w-full h-full rounded-lg cursor-pointer"
                    onClick={handleUserAction}
                    onTouchStart={handleUserAction}
                />
            </div>
        </div>
    );
};
