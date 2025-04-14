function displayWokrout(response) {
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

  let instrucitonsInput = document.querySelector("#user-instructions");

  let apiKey = "11e1c3be102e1o7a295b1f381bf4dtf4";
  let context =
    "You are a workout expert and enjoys to set up simple yet effective workouts. Your mission is to generated a workout containing only 5 exercises. The wokout sholud be based on the user instructions. For example: legs beginner. Provide the workout in paragrafs, each paragraf should only contain one exercise. In total 5 paragrafs, consisting on 5 exercises. Make each <strong>exercise </stron>";
  let prompt = `User instructions: Generate a 5 step wokout with ${instructionsInput.value} in mind`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating workout");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayWokrout);
}

let workoutFormElement = document.querySelector("#workout-generator-form");
workoutFormElement.addEventListener("submit", generateWorkout);
