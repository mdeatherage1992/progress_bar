/*
INSTRUCTIONS

Since the thermometer can be used multiple times on the same page with different data, each should have it's own set of data storage and functions to use. Create a thermometer JavaScript object that stores the name, goal, and amount raised and has methods that can individually do the following: update the amount raised and progress bar, perform a mock AJAX call to get new data, and handle load/init type of functionality.

Add some interactivity to the widget. At a minimum, clicking the "Give Now!" button should produce some type of success message within the widget. Feel free to add any other interactions that you think would make for a pleasant giving experience for the end user.

No restrictions on style or presentation, and feel free to use jQuery to your heart's desire.

 */



function move() {
  var elem = document.getElementById("myBar");
  var total_raised = document.getElementById("total_raised").innerHTML;
  var total_goal = document.getElementById("total_goal").innerHTML;
  var number_raised = Number(total_raised.replace(/[^0-9.-]+/g,""));
  var number_goal = Number(total_goal.replace(/[^0-9.-]+/g,""));
  var intended_giving = parseInt(document.getElementById("intended_giving").value);
  if(number_raised < number_goal) {
    if((number_raised + intended_giving) > number_goal){
      var part_donation = number_goal - number_raised
      number_raised += part_donation
      var returned_capital = intended_giving - part_donation
      var width = ((number_raised / number_goal) * 100);
      elem.style.width = width + '%'
      document.getElementById("total_raised").innerHTML = '$' + number_raised
      elem.innerHTML = width + '%'
      alert(`Thanks for your donation. We have hit our goal. We are returning $${returned_capital}. Thank you.`)
      return
    } else {
    number_raised += intended_giving
    var width = ((number_raised / number_goal) * 100);
    elem.style.width = width + '%'
    document.getElementById("total_raised").innerHTML = '$' + number_raised
    elem.innerHTML = width + '%'
    localStorage.setItem('current_raised', number_raised)
    alert(`Thank you for your $${intended_giving} donation. We are getting closer to our goal!`)
    return
  }
} else {
  alert("We have already hit our goal thank you")
}
}
