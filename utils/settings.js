export const COLORS = {
    player: "crimson",
    ball: "coral",
    goal: "green",
    ground: "grey",
};

export const SCREEN = {
    width: 600,
    height: 600,
};

export const MAP = {
    width: 600,
    height: 600,
};

export const DT = 25; // Delta time between game loop iterations
export const GRAVITY = 0.001; // Gravity acceleration in pixels/DT²
export const FRICTION = {
    player: 0.05, // Deceleration while player is in movement in pixels/DT²
    ball: 0.01, // Deceleration while ball is in movement in pixels/DT²
};
export const PLAYER_SPEED = 0.5; // pixels/DT
