function getColor() {
	let color = "0x";

	for(let i = 0; i < 6; i++) {
		let int = random(0, 15);

		if(int < 10) {
			color += int;
		} else {
			int += 55;
			color += String.fromCharCode(int);
		}

	}

	return color;
}

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getVec() {
	let x = random(-1, 1);
	let y = random(-1, 1);

	if(x == 0 || y == 0) {
		return getVec();
	} else {
		return {
			x: x,
			y: y
		};
	}
}


function getStartPosition() {
	let startPositionMinX = SPAWN_PADDING_X;
	let startPositionMaxX = winWidth - SPAWN_PADDING_X;
	let startPositionMinY = SPAWN_PADDING_Y;
	let startPositionMaxY = winHeight - SPAWN_PADDING_Y;

	return {
		x: random(startPositionMinX, startPositionMaxX),
		y: random(startPositionMinY, startPositionMaxY)
	};
}