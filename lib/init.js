let app = new PIXI.Application({
	width: 256,
	height: 256,
	antialias: true,
	trasparent: false,
	resolution: 1
});

document.body.appendChild(app.view);

app.renderer.backgroundColor = 0xB28F4E;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

let res = PIXI.loader.resources;

let winWidth = app.renderer.width;
let winHeight = app.renderer.height;

const MOVESPEED = 3;
const SPAWN_PADDING_X = winWidth * 0.1;
const SPAWN_PADDING_Y = winHeight * 0.1;
