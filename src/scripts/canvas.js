export const canvas = document.querySelector('canvas');
export const c = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

export const gravity = 0.7