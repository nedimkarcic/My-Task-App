let date = document.querySelector('#date');
let list = document.querySelector('#list');
let icon = document.querySelector('.icon');
let input = document.querySelector('.input');

//Date
let d = new Date();
let day = d.getDate();
let month = d.getMonth() + 1;
let year = d.getFullYear();

date.innerHTML = day + '.' + month + '.' + year + '.';

// date.innerHTML = new Date().toJSON().slice(0,10).replace(/-/g,'.');

// new Intl.DateTimeFormat('en-GB').format(date);


let addItem = (e) => {
	if (input.value !== ''){
	let li = document.createElement('li');
	let span = document.createElement('span')
	const text = document.createTextNode(input.value);
	span.innerHTML = '<i class="fas fa-times delete"></i>';
	li.appendChild(text);
	li.appendChild(span);
	span.classList.add('icon-x');
	list.appendChild(li);
	input.value = '';
	localStorage["list"] = list.innerHTML;
};
}

let addItemOnEnter = (e) => {
	if(e.keyCode === 13){
		addItem();
	}
}

let strikethrough = (e) => {
	if(e.target.tagName === 'LI'){
	//In HTML, the returned value of the tagName property is always in UPPERCASE. 
	e.target.classList.toggle('text-deco');
	localStorage["list"] = list.innerHTML;
}
};

let deleteItem = (e) => {
	// provjeravam da li klik na bilo kojem mjestu na stranici sadrži klasu delete
	if(e.target.classList.contains('delete')){
	// označavam li element koji želim izbrisati (li-span-i)
	const taskItem = e.target.parentElement.parentElement;
	// brisanje li iz liste
	list.removeChild(taskItem);
	localStorage["list"] = list.innerHTML
};
}

if (localStorage["list"]) { // checking, if there is something in localstorage
  list.innerHTML = localStorage["list"];
}



icon.addEventListener('click', addItem);
input.addEventListener('keyup', addItemOnEnter);
list.addEventListener('click', strikethrough);
list.addEventListener('click', deleteItem);
