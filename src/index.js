function displayWorkout(response) {
  console.log("workout generated");
  new Typewriter("#workout", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2.5,
    cursor: "",
  });
}

function generateWorkout(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "11e1c3be102e1o7a295b1f381bf4dtf4";
  let context =
    "You are a workout expert who loves generating customized workouts. Your mission is to generate a workout containing exactly 5 exercises. Please present your answer as bullet points in 5 distinct paragraphs, with each paragraph containing exactly one exercise. Do not include bullet points, numbers or any extra text beyond the exercises. Ensure that each paragraph starts on a new line with a clear separation between them. Make each exercise in bold writing. The discription of the exercise should not be in bold writing. Write this in basic HTML. Be sure not to underline that you use HTML. If the user instructions do not fit with any exercise, please alert `This part of the body is not suited for exercise`for example the ear or the head";
  let prompt = `User instructions: Generate a 5-step workout focusing on ${instructionsInput.value}. Output the workout using exactly 5 paragraphs, each containing one exercise.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let workoutElement = document.querySelector("#workout");
  workoutElement.classList.remove("hidden");
  workoutElement.innerHTML = `<div class="generating"> ⏳ Generating a ${instructionsInput.value} workout</div>`;

  console.log("generating workout");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayWorkout);
}

let workoutFormElement = document.querySelector("#workout-generator-form");
workoutFormElement.addEventListener("submit", generateWorkout);
