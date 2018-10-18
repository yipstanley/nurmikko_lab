var container = document.getElementById("peopleCont");

class Person {
	constructor(name, position, image, field) {
		this.name = name;
		this.position = position;
		this.image = image;
		this.field = field;
	}
}

var people = [new Person("Arto Nurmikko", "Professor of Engineering and Physics", "../images/placeholder.jpg"),
			  new Person("Joonsoo Jeong", "Postdoctorial Researcher", "../images/joonsoo_jeong.png", "Research Area"),
			  new Person("Farah Laiwalla", "Postdoctorial Researcher", "../images/placeholder.jpg", "Research Area"),
			  new Person("Christopher Heelan", "PhD Candidate", "../images/placeholder.jpg", "Research Area"),
			  new Person("Songtao Chen", "PhD Candidate", "../images/placeholder.jpg", "Research Area"),
			  new Person("Zeyang Yu", "PhD Candidate", "../images/placeholder.jpg", "Research Area"),
			  new Person("Dmitrijs Celinskis", "PhD Candidate", "../images/placeholder.jpg", "Research Area"),
			  new Person("Stefan Sigurdsson", "PhD Candidate", "../images/placeholder.jpg", "Research Area"),
			  new Person("Jihun Lee", "PhD Candidate", "../images/placeholder.jpg", "Research Area"),
			  new Person("Cù Gia Huy", "PhD Candidate", "../images/placeholder.jpg", "Research Area"),
			  new Person("Nina Zhang", "Masters Candidate", "../images/placeholder.jpg", "Research Area"),
			  new Person("Ethan Mok", "Undergraduate", "../images/placeholder.jpg", "Research Area")]

function createImage(src, alt) {
	var img = document.createElement("img");
	img.src = src;
	img.width = 150;
	img.alt = alt;
	return img;
}

function createText(text, bold) {
	var newText = document.createElement("div");
	newText.textContent = text;
	newText.style.fontSize = "1em";
	if (bold) {
		newText.style.fontWeight = "Bold";
	}
	return newText;
}

function createLeftSide(image) {
	var div = document.createElement("div");
	div.appendChild(image);
	div.style.float = "left";
	div.style.marginRight = "1em";
	return div;
}

function createRightSide(name, field, position) {
	var div = document.createElement("div");
	div.appendChild(name);
	div.appendChild(field);
	div.appendChild(position);
	div.style.marginTop = "1em";
	div.style.float = "left";
	return div;
}

function createItem(person) {
	var div = document.createElement("div");
	div.style.width = "500px";
	div.style.marginTop = "1em";
	div.style.float = "left";
	div.appendChild(createLeftSide(createImage(person.image, "No Image")));
	div.appendChild(createRightSide(createText(person.name, true), createText(person.field, false), createText(person.position, false)));
	container.appendChild(div);
}

var i;
for (i = 0; i < people.length; i++) {
	createItem(people[i]);
}