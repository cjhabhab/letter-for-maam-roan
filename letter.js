const scene = document.querySelector(".letter-scene");
const envelope = document.getElementById("envelope");
const envelopeSeal = document.getElementById("envelopeSeal");
const letterPreview = document.getElementById("letterPreview");
const instruction = document.getElementById("instruction");
const petalContainer = document.getElementById("petalContainer");

function startPetalShower() {
  const symbols = ["✿", "♥", "❀", "♡"];

  setInterval(() => {
    const petal = document.createElement("span");
    petal.classList.add("petal");
    petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = Math.random() * 14 + 14 + "px";
    petal.style.animationDuration = Math.random() * 4 + 4 + "s";

    petalContainer.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 8000);
  }, 350);
}

if (scene && envelope && envelopeSeal && letterPreview && instruction) {
  envelope.addEventListener("click", function () {
    if (!scene.classList.contains("stage-0")) {
      return;
    }

    scene.classList.remove("stage-0");
    scene.classList.add("stage-1");

    instruction.textContent =
      "Now click the rose emblem to open your envelope.";
  });

  envelopeSeal.addEventListener("click", function (event) {
    event.stopPropagation();

    if (
      !scene.classList.contains("stage-1") &&
      !scene.classList.contains("stage-0")
    ) {
      return;
    }

    scene.classList.remove("stage-0", "stage-1");
    scene.classList.add("stage-2");

    instruction.textContent =
      "Your letter is waiting. Click it to unfold your message.";
  });

  letterPreview.addEventListener("click", function (event) {
    event.stopPropagation();

    if (!scene.classList.contains("stage-2")) {
      return;
    }

    scene.classList.add("stage-3");
    instruction.textContent = "";

    startPetalShower();
  });
} else {
  console.error("Some envelope elements are missing from letter.html.");
}
