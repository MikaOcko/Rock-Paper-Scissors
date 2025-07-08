// ------------ Variables/elements -----------
// Get references from to DOM elements
const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const cpuResult = document.querySelector(".cpu_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

// ---------- Fonctions/logic ----------
// Loop through each option image element
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "Wait...";

        // Loop through each option image element again
        optionImages.forEach((image2, index2) => {
            // If the current index doesn't match the clicked index
            // Remove the "active" class from the other option images
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        // Set a timeout to delay the result calculation
        let time = setTimeout(() => {
            gameContainer.classList.remove("start");

            // Get the source of the clicked option image
            let imageSrc = e.target.querySelector("img").src;
            // Set the user image to the clicked option image
            userResult.src = imageSrc;

            // Generate a random number between 0 and 2
            let randomNumber = Math.floor(Math.random() * 3);
            // Create an array of CPU image options
            let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png" ];
            // Set the CPU image to a random option from the array
            cpuResult.src = cpuImages[randomNumber];

            // assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
            let cpuValue = ["R", "P", "S"][randomNumber];
            // assign a letter value to the clicked option (based on index)
            let userValue = ["R", "P", "S"][index];

            // Create an object with all possible outcomes
            let outcomes = {
                RR: "Draw",
                RP: "CPU",
                RS: "User",
                PR: "User",
                PP: "Draw",
                PS: "CPU",
                SR: "CPU",
                SP: "User",
                SS: "Draw"
            };

            // Look up the outcomes value based on user and CPU options
            let outcomesValue = outcomes[userValue + cpuValue];

            // Display the result
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomesValue} won !!`;
        },2500);
        
    })
});