const next_button = document.getElementById('next_offer_button')
const previous_button = document.getElementById('previous_offer_button')
next_button.addEventListener("click", next_offer)
previous_button.addEventListener("click", previous_offer)

function update_image_buttons (){
	let next_image = document.querySelector(".preview_offer_right")
	let previous_image = document.querySelector(".preview_offer_left")
	next_image.addEventListener("click", next_offer)
	previous_image.addEventListener("click", previous_offer)
}
function next_offer() {
	current_index++
	if (current_index > 6) {
		current_index = 0
	}
	if (current_index + 3 > 6){
		index = current_index + 3 - offers.length
		append_offers(index, "offer hidden_offer_right")
	}
	else {
		append_offers(current_index + 3, "offer hidden_offer_right")
	}
	offer_list[0].parentNode.removeChild(offer_list[0])
	offer_list = document.querySelectorAll(".offer")
	last_day_index = 3 - 1 //3 since current is always in position 3, -1 becuause we removed the first element in the array

	offer_list[last_day_index - 2].classList = "offer hidden_offer_left"
	offer_list[last_day_index - 1].classList = "offer hidden_offer_left"
	offer_list[last_day_index - 1].removeEventListener('click', previous_offer)
	offer_list[last_day_index].classList = "offer preview_offer_left"
	offer_list[last_day_index + 1].classList = "offer current"
	offer_list[last_day_index + 1].removeEventListener('click', next_offer)
	offer_list[last_day_index + 2].classList = "offer preview_offer_right"

	offer_list = document.querySelectorAll(".offer")

	update_image_buttons()
}
function previous_offer(){
	current_index--
	if (current_index < 0) {
		current_index = 6
	}
	if (current_index - 3 < 0){
		index = offers.length + current_index - 3
		append_offers(index, "offer hidden_offer_left", "unshift")
	}
	else {
		append_offers(current_index - 3, "offer hidden_offer_left", "unshift")
	}
	offer_list[offer_list.length - 1].parentNode.removeChild(offer_list[offer_list.length - 1])
	offer_list = document.querySelectorAll(".offer")
	last_day_index = 3 + 1 //3 since current is always in position 3, +1 becuause we added an element in the front on the array

	offer_list[last_day_index + 2].classList = "offer hidden_offer_right"
	offer_list[last_day_index + 1].classList = "offer hidden_offer_right"
	offer_list[last_day_index + 1].removeEventListener('click', next_offer)
	offer_list[last_day_index].classList = "offer preview_offer_right"
	offer_list[last_day_index - 1].classList = "offer current"
	offer_list[last_day_index - 1].removeEventListener('click', previous_offer)
	offer_list[last_day_index - 2].classList = "offer preview_offer_left"

	offer_list = document.querySelectorAll(".offer")
	update_image_buttons()
}

const offers = [
	{
		day: "Monday",
		image: "./media/snickers.png",
		item: "Vegans snickers cheesecake with a cortado",
		description: "Intense care for the environment goes perfect with intense coffee.",
		price: "39,-"
	},
	{
		day: "Tuesday",
		image: "./media/crispy_tofu.jpg",
		item: "Crispy tofu bowl and our homemade brew",
		description: "Being vegan is hot - so is our homemade brew. Now you can have both at a discount rate!",
		price: "35,-"
	},
	{
		day: "Wednesday",
		image: "./media/bananachurros.jpg",
		item: "Churro banana bites and kiwi fruit smoothie",
		description: "Fruity combo with an even juicier price.",
		price: "45,-"
	},
	{
		day: "Thursday",
		image: "./media/burger.jpg",
		item: "Mushroom-quinoa burger with herbal iced tea",
		description: "A surprising combo. Almost as surprising as the price.",
		price: "49,-"
	},
	{
		day: "Friday",
		image: "./media/sorbet.jpg",
		item: "Basil-berry lemonade sorbet with vanilla almond latte",
		description: "First cold, then warm. Just like our environment due to global warming.",
		price: "39,-"
	},
	{
		day: "Saturday",
		image: "./media/springtacos.jpg",
		item: "Grilled asparagus and shitake tacos with strawberry tea",
		description: "The meal cleanses your body, the price cleanses your mind.",
		price: "45,-"
	},
	{
		day: "Sunday",
		image: "./media/chocolatebread.jpg",
		item: "Double chocolate zucchini bread and home brew",
		description: "What better way to end a sustainable week than a sustainable meal at an even more sustainable price?",
		price: "39,-"
	}
]

let offer_container = document.querySelector(".carousel_container")
function append_offers (day_index, classes, method = "append") {
	let offerdiv = document.createElement("ARTICLE");
	offer = offers[day_index]
	offerdiv.classList = classes
	offerdiv.innerHTML = `<h2>${offer.day}:</h2>
	<img src="${offer.image}" alt="Image of offer at ${offer.day}" />
	<h3>${offer.item}</h3>
	<p>${offer.description}</p>
	<p class="price">${offer.price}</p>`
	if (method == "append"){
		offer_container.append(offerdiv)
	}
	else {
		offer_container.insertBefore(offerdiv, offer_list[0])
	}

}


let d = new Date()
let today = d.getDay()
let current_index
if (today == 0){
	current_index = 6
}
else {
	current_index = today - 1
}

function append_all_offers (){
	for (let i = 3; i >= 1; i--) {
		if (current_index - i < 0){
			index = current_index - i + 7
		}
		else {
			index = current_index - i
		};
		if (i == 1) {
			append_offers(index, "offer preview_offer_left")
		}
		else {
			append_offers(index, "offer hidden_offer_left")
		}
	}
	append_offers(current_index, "offer current")
	for (let i = current_index + 1; i <= current_index + 3; i++) {
		if (i > 6){
			index = i - 7 // 7 står for antall dager i uken
		}
		else {
			index = i
		}
		if (i == current_index + 1){
			append_offers(index, "offer preview_offer_right")
		}
		else {
			append_offers(index, "offer hidden_offer_right")
		}
	}
}
append_all_offers()

let offer_list = document.querySelectorAll(".offer")
let end_index = offer_list.length - 1
// linjen under fungerer ikke skikkelig
//offer_list[current_index].querySelector("h2").innerText = 'Today:'

/*
window.onload = () => {
	offer_list[current_index - 1].classList = "offer preview_offer_left"
	offer_list[current_index + 1].classList = "offer preview_offer_right"
	update_image_buttons()
}
*/
window.onkeydown = (e) => {
	if (e.keyCode == 37){
		previous_offer()
	}
	else if (e.keyCode == 39) {
		next_offer()
	}
}
