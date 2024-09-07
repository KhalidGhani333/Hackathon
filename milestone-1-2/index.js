var toggleSkillsButton = document.getElementById("toggle-skills-btn");
var skillsSection = document.getElementById("skills");
toggleSkillsButton.addEventListener("click", function () {
    if (skillsSection.classList.contains("hidden")) {
        skillsSection.classList.remove("hidden");
        toggleSkillsButton.textContent = "Hide Skills";
    }
    else {
        skillsSection.classList.add("hidden");
        toggleSkillsButton.textContent = "Show Skills";
    }
});
