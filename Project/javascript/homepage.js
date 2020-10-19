function dailyMenu() {
    // Getting the current date when the website is accessed.
    var todaysDate = new Date();
    var day = todaysDate.getDay();
    console.log(day);

    // An array containing a daily text for the header element, a price for the daily menu and an image 
    // and an alt attribute to that image to show in the "Daily menu" box on the homepage.
    days = [{
        todayText: "Sunday",
        todayInfo: "Double chocolate zucchini bread and home brew: What better way to end a sustainable week than a sustainable meal at an even more sustainable price?",
        price: "45,-",
        imageSrc: "media/chocolatebread.jpg",
        imageAlt: "Menu for Sunday"
    }, {
        todayText: "Monday",
        todayInfo: "Vegans snickers cheesecake with a cortado: Intense care for the environment goes perfect with intense coffee.",
        price: "35,-",
        imageSrc: "media/snickers.png",
        imageAlt: "Menu for Monday"
    }, {
        todayText: "Tuesday",
        todayInfo: "Crispy tofu bowl and our homemade brew: Being vegan is hot - so is our homemade brew. Now you can have both at a discount rate!",
        price: "39,-",
        imageSrc: "media/crispy_tofu.pgn",
        imageAlt: "Menu for Tuesday"
    }, {
        todayText: "Wednesday",
        todayInfo: "Churro banana bites and kiwi fruit smoothie: Fruity combo with an even juicier price.",
        price: "45,-",
        imageSrc: "media/bananacurros.jpg",
        imageAlt: "Menu for Wednesday"
    }, {
        todayText: "Thursday",
        todayInfo: "Mushroom-quinoa burger with herbal iced tea: A surprising combo. Almost as surprising as the price.",
        price: "39,-",
        imageSrc: "media/burger.jpg",
        imageAlt: "Menu for Thursday"
    }, {
        todayText: "Friday",
        todayInfo: "Basil-berry lemonade sorbet with vanilla almond latte: First cold, then warm. Just like our environment due to global warming.",
        price: "45,-",
        imageSrc: "media/sorbet.jpg",
        imageAlt: "Menu for Friday"
    }, {
        todayText: "Saturday",
        todayInfo: "Grilled asparagus and shitake tacos with strawberry tea: The meal cleanses your body, the price cleanses your mind.",
        price: "35,-",
        imageSrc: "media/springtacos.jpg",
        imageAlt: "Menu for Saturday"
    }]

    // This code gives the id's in homepage.html the correct values for the corresponding day.
    document.getElementById("dailyMenu").src = days[day].imageSrc
    document.getElementById("dailyMenu").alt = days[day].imageAlt
    document.getElementById("todayText").textContent = days[day].todayText
    document.getElementById("todayInfo").textContent = days[day].todayInfo
    document.getElementById("price").textContent = days[day].price
}

// The function to place the daily elements on the homepage is calles when the site is accessed.
dailyMenu()