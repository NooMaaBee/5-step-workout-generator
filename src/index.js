function generateWorkout(event) {
  event.preventDefault();

  new Typewriter("#workout", {
    strings: "Workout",
    autoStart: true,
    delay: 2.5,
    cursor: "",
  });
}

let workoutFormElement = document.querySelector("#workout-generator-form");
workoutFormElement.addEventListener("submit", generateWorkout);
