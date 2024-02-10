let currentStep = 1;

function showNextMessage(nextContainerId) {
  const currentContainer = document.getElementById(
    `invitation-container-${currentStep}`
  );
  currentContainer.classList.add("hidden");

  if (currentStep < 3) {
    currentStep++;
    const nextContainer = document.getElementById(nextContainerId);
    nextContainer.classList.remove("hidden");
  }
}

function showPreviousMessage(previousContainerId) {
  if (currentStep > 1) {
    const currentContainer = document.getElementById(
      `invitation-container-${currentStep}`
    );
    currentContainer.classList.add("hidden");

    currentStep--;
    const previousContainer = document.getElementById(previousContainerId);
    previousContainer.classList.remove("hidden");
  }
}

function confirmAttendance(response) {
  if (response === "yes") {
    alert(
      "I knew you would say yes bub, can't wait to be your date :> i love you! xx Kazoi"
    );
  } else if (response === "no") {
    alert(
      "Bawal mag-no hehehe :>"
    );
  }
}
