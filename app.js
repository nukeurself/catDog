function loop() {

	for(let i = 0; i < ANIMALS.length; i++) {
		move(ANIMALS[i].sprite);
	}


	requestAnimationFrame(loop);
}



