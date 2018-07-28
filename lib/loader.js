const TILESET = "images/cat_dog.json";
const UISET = "images/ui.json";

let TEXTURE_ANIMALS;
const DOG_SRC = "dog.png";
const CAT_SRC = "cat.png";
const COUNTER_BG_SRC = "counter_bg.png";

let ANIMALS;
let COUNTER_BG;
let COUNTER;

PIXI.loader
	.add([
		TILESET,
		UISET
	])
	.on("progress", loadHandler)
	.load(setup);

function loadHandler(loader, resource) {
	console.log("loading: " + resource.url + " => " + loader.progress + "%");
}	

function setup() {
	console.log("setup");
	TEXTURE_ANIMALS = res[TILESET].textures;

	ANIMALS = [
		{
			src: DOG_SRC,
		},
		{
			src: DOG_SRC,
		},
		{
			src: DOG_SRC,
		},
		{
			src: DOG_SRC,
		},
		{
			src: DOG_SRC,
		},
		{
			src: CAT_SRC,
		},
		{
			src: CAT_SRC,
		},
		{
			src: CAT_SRC,
		},
		{
			src: CAT_SRC,
		},
		{
			src: CAT_SRC,
		}
	];

	for(let i = 0; i < ANIMALS.length; i++) {
		let start = getStartPosition();

		ANIMALS[i].sprite = new PIXI.Sprite(TEXTURE_ANIMALS[ANIMALS[i].src]);
 		ANIMALS[i].sprite.anchor.set(0.5);
 		ANIMALS[i].sprite.position.set(start.x, start.y);
 		ANIMALS[i].sprite.scale.set(0.5, 0.5);

 		app.stage.addChild(ANIMALS[i].sprite);
	
 		ANIMALS[i].sprite.buttonMode = true;
	 	ANIMALS[i].sprite.interactive = true;
	 	ANIMALS[i].sprite.on("pointerdown", destroy);

	 	ANIMALS[i].sprite.vec = getVec();
	}

	COUNTER_BG = new PIXI.Sprite(res[UISET].textures[COUNTER_BG_SRC]);
	COUNTER_BG.anchor.set(0.5, 0);
	COUNTER_BG.scale.set(0.5);
	COUNTER_BG.position.set(winWidth / 2, 0);

	app.stage.addChild(COUNTER_BG);

	let style = new PIXI.TextStyle({
		fill: "#FFFFFF",
		fontSize: 100
	});

	COUNTER = new PIXI.Text("5", style);
	COUNTER.anchor.set(0.5, 0);
	COUNTER.scale.set(0.5);
	COUNTER.position.set(winWidth / 2, 0);

	app.stage.addChild(COUNTER);

	alert("Ohman die Hunde verschrecken noch meine ganzen Katzen. Bitte entferne sie!");
 	console.log("loop");
 	loop();
}