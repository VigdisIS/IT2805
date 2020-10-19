//Array for calculating the over-all rating and for getting the previous ratings
const rating_array = [];
const previous_ratings = [];

//Function for getting the star rating of the user and applying the "checked" class to the amount of chosen stars out of five.
document.getElementById("star_rating").addEventListener(
  "click",
  (getUserRating = chosen_stars => {
    removeRating(chosen_stars);

    for (var i = 1; i <= chosen_stars; i++) {
      let thisStar = "star" + [i];
      let changeStar = document.getElementById(thisStar);
      changeStar.classList.add("checked");
      changeStar.innerHTML = "\u2605";
      changeStar.style.color = "gold";
      changeStar.style.textShadow = "0 0 4px rgb(211, 179, 0)";
    }
  })
);

//Removes the "checked" class from the previously chosen stars
const removeRating = n => {
  for (var i = 5; i >= n; i--) {
    let getStar = "star" + [i];
    let starToRemove = document.getElementById(getStar);
    starToRemove.classList.remove("checked");
  }
};

//Changes the styling of the stars a person hovers over
const hoverStars = () => {
  for (var i = 1; i <= 5; i++) {
    let chosenStar = "star" + [i];
    let hoverStar = document.getElementById(chosenStar);
    hoverStar.innerHTML = "☆";
    hoverStar.style.color = "black";
    hoverStar.style.textShadow = "none";
  }
};

//Draw stars after finished hoverStars
const drawStars = () => {
  number_of_stars = document.querySelectorAll(".checked").length;
  for (var i = 1; i <= number_of_stars; i++) {
    let chosenStar = "star" + [i];
    let hoverStar = document.getElementById(chosenStar);
    hoverStar.innerHTML = "\u2605";
    hoverStar.style.color = "gold";
    hoverStar.style.textShadow = "0 0 4px rgb(211, 179, 0)";
  }
};

//Appends a new box with review details like star rating, review and name of user when they click on the "SEND REVIEW" button
document.getElementById("new_review").addEventListener(
  "click",
  (addReview = () => {
    if (
      document.getElementById("user_text_review").value == "" ||
      document.getElementById("name").value == "" ||
      document.getElementById("user_email").value == ""
    ) {
      alert("Please fill in all necessary fields.");
    } else {
      let user_review_container = document.createElement("DIV");
      user_review_container.id = "userReview";

      let user_name = document.createElement("P");
      let user_name_input = document.getElementById("name").value;
      user_name.innerHTML = user_name_input;

      let user_star_rating = document.createElement("DIV");
      user_star_rating.id = "userRating";

      //Makes a copy of the chosen star rating and appends it to the user-review container.
      let goldStar = 0;
      for (var i = 1; i <= 5; i++) {
        let starToAdd = "star" + [i];
        let newStar = document.getElementById(starToAdd).innerHTML;
        if (newStar == "\u2605") {
          goldStar++;
        }
        let copy_of_star = document.createElement("SPAN");
        copy_of_star.innerHTML = newStar;
        if (copy_of_star.innerHTML == "\u2605") {
          copy_of_star.style.color = "gold";
          copy_of_star.style.textShadow = "0 0 4px rgb(211, 179, 0)";
        }
        copy_of_star.id = "star_copy" + [i];

        user_star_rating.appendChild(copy_of_star);
      }

      //Adds the current rating to the rating-array, which will later be used to calculate the all-over rating
      rating_array.push(goldStar);

      let textarea = document.createElement("DIV");
      textarea.id = "text_input_user";
      let actual_input = document.createElement("P");
      let value_of_input = document.getElementById("user_text_review").value;
      actual_input.innerHTML = value_of_input;
      textarea.appendChild(actual_input);

      user_review_container.appendChild(user_name);
      user_review_container.appendChild(user_star_rating);
      user_review_container.appendChild(textarea);
      user_reviews.insertBefore(user_review_container, user_reviews.firstChild);

      //Appends the new review to the review array
      let newReviewObj = {
        user_rating: goldStar,
        user_name: user_name_input,
        user_text_review: value_of_input
      };
      previous_ratings.push(newReviewObj);

      calculateRating();
      clearFields();
    }
  })
);

//Calculates the overall rating
const calculateRating = () => {
  for (var i = 1; i <= 5; i++) {
    let toCalculateStar = "star_o" + [i];
    let CalculateStar = document.getElementById(toCalculateStar);
    CalculateStar.innerHTML = "☆";
    CalculateStar.style.color = "black";
    CalculateStar.style.textShadow = "none";
  }

  let sum = 0;
  for (var i = 0; i < rating_array.length; i++) {
    sum += parseInt(rating_array[i], 6);
  }
  let avg = sum / rating_array.length;

  //Rounds the number up to the nearest integer
  let rating = Math.ceil(avg);

  for (var i = 1; i <= rating; i++) {
    let checkRatingStar = "star_o" + [i];
    let ratingStar = document.getElementById(checkRatingStar);
    ratingStar.innerHTML = "\u2605";
    ratingStar.style.color = "gold";
    ratingStar.style.textShadow = "0 0 4px rgb(211, 179, 0)";
  }

  let rating_text = document.getElementById("overall_rating_text");
  rating_text.innerText = rating_array.length + " people rated us: ";
};

//Empties all fields and uses the hoverStars function to clear the star rating
const clearFields = () => {
  hoverStars();
  document.getElementById("user_text_review").value = "";
  document.getElementById("name").value = "";
  document.getElementById("user_email").value = "";
};
