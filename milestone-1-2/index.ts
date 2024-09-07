const toggleSkillsButton = document.getElementById("toggle-skills-btn") as HTMLButtonElement;
const skillsSection = document.getElementById("skills") as HTMLElement;

toggleSkillsButton.addEventListener("click", () => {
    if (skillsSection.classList.contains("hidden")) {
        skillsSection.classList.remove("hidden");
        toggleSkillsButton.textContent = "Hide Skills";
    } else {
        skillsSection.classList.add("hidden");
        toggleSkillsButton.textContent = "Show Skills";
    }
});
