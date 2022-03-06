'use strict';

let commentForm = document.querySelector('.comment__form');
let commentList = document.querySelector('.comment__list');
let commentField = document.querySelector('.comment__field');

commentForm.onsubmit = function (evt) {
	evt.preventDefault();

	let newComment = document.createElement('li');
	newComment.classList.add('user__comment');
	newComment.textContent = commentField.value;
	commentField.value = '';
	commentList.append(newComment);
};

let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');

heart.onclick = function () {
	if (heart.classList.contains('added')) {
		likesNumber.textContent--;
	} else {
		likesNumber.textContent++;
	}
	heart.classList.toggle('added');
};