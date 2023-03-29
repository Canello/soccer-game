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

export const DT = 5; // Delta time between game loop iterations
export const GRAVITY = 0.001; // Gravity acceleration in pixels/DT²
export const PLAYER_SPEED = 0.5; // pixels/DT
export const ACCELERATION_PER_PENETRATION = 0.0006; // Acceleration inflicted on the ball per pixel of penetration on player in 1/DT²
