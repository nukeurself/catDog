function move(obj) {
	if(obj.x + obj.vec.x * MOVESPEED <= 0 + obj.width / 2) {
		obj.vec.x = 1;
	} else if(obj.x + obj.vec.x * MOVESPEED >= winWidth - obj.width / 2) {
		obj.vec.x = -1;
	} else if(obj.y + obj.vec.y * MOVESPEED <= 0 +obj.height / 2) {
		obj.vec.y = 1;
	} else if(obj.y + obj.vec.y * MOVESPEED >= winHeight - obj.height / 2) {
		obj.vec.y = -1;
	}

	obj.position.set(obj.x + obj.vec.x * MOVESPEED, obj.y + obj.vec.y * MOVESPEED);
}

