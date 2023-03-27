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
    ball: 0.0001, // Deceleration while ball is in movement in pixels/DT²
};
export const PLAYER_SPEED = 0.5; // pixels/DT
export const BALL_ELASTICITY = 0.8; // Fraction o speed conserved after collision
export const ACCELERATION_PER_PENETRATION = 0.0006; // Acceleration inflicted on the ball per pixel of penetration on player in 1/DT²
