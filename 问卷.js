function getScore(name) {
	let chooseAnswer = [-1, -1, -1, -1, -1];
	document.querySelectorAll("input[name='answer1']").forEach((item, index)=> {
		if (item.checked) {
			chooseAnswer[0] = index;
		}
	});
	document.querySelectorAll("input[name='answer2']").forEach((item, index)=> {
		if (item.checked) {
			chooseAnswer[1] = index;
		}
	});
	document.querySelectorAll("input[name='answer3']").forEach((item, index)=> {
		if (item.checked) {
			chooseAnswer[2] = index;
		}
	});
	document.querySelectorAll("input[name='answer4']").forEach((item, index)=> {
		if (item.checked) {
			chooseAnswer[3] = index;
		}
	});
	document.querySelectorAll("input[name='answer5']").forEach((item, index)=> {
		if (item.checked) {
			chooseAnswer[4] = index;
		}
	});
	let scores = 0;
	switch (name) {
		case "柏闻":
			scores = 0;
			if (chooseAnswer[0] === 0) {
				scores += 20;
			}
			for (let i = 1; i < chooseAnswer.length; i++) {
				if (chooseAnswer[i] === 0) {
					scores += 20;
				}
			}
			break;
		case "季少一":
			scores = 0;
			if (chooseAnswer[0] === 1) {
				scores += 20;
			}
			for (let i = 1; i < chooseAnswer.length; i++) {
				if (chooseAnswer[i] === 1) {
					scores += 20;
				}
			}
			break;
		case "江恪":
			scores = 0;
			if (chooseAnswer[0] === 0) {
				scores += 20;
			}
			for (let i = 1; i < chooseAnswer.length; i++) {
				if (chooseAnswer[i] === 2) {
					scores += 20;
				}
			}
			break;
		case "许向安":
			scores = 0;
			if (chooseAnswer[0] === 0) {
				scores += 20;
			}
			for (let i = 1; i < chooseAnswer.length; i++) {
				if (chooseAnswer[i] === 3) {
					scores += 20;
				}
			}
			break;
		case "许向宁":
			scores = 0;
			if (chooseAnswer[0] === 0) {
				scores += 20;
			}
			for (let i = 1; i < chooseAnswer.length; i++) {
				if (chooseAnswer[i] === 4) {
					scores += 20;
				}
			}
			break;
	}
	alert("你与"+name+"的契合度为"+scores+"%");
}
