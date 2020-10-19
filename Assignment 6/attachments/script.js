regnUtSkatt = () => {
  var income = document.getElementById("income").value;
  var wealth = document.getElementById("wealth").value;
  document.getElementById("tax").value =
    0.35 * parseInt(income) + 0.25 * parseInt(wealth);
};
