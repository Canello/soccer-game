export const screenWidth = 600;
export const screenHeight = 600;

const screen = document.getElementById("screen");
screen.setAttribute("width", `${screenWidth}px`);
screen.setAttribute("height", `${screenHeight}px`);
screen.style.border = "2px solid grey";

export const context = screen.getContext("2d");
