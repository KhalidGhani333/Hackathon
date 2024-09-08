const form = document.getElementById("resume-form") as HTMLFormElement;
const generatedResume = document.getElementById("generated-resume") as HTMLElement;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); 

    // Fetch form data
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const work = (document.getElementById("work") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;

    
    if (name && email && phone && education && work && skills) {
        // dynamic resume content
        generatedResume.innerHTML = `
            <div class="resume-content">
                <h3 class="section-header">Personal Information</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>

                <h3 class="section-header">Education</h3>
                <p>${education}</p>

                <h3 class="section-header">Work Experience</h3>
                <p>${work}</p>

                <h3 class="section-header">Skills</h3>
                <p>${skills.split(',').map(skill => `<span class="skill">${skill.trim()}</span>`).join(' ')}</p>
            </div> `;
    } else {
        alert("Please fill in all fields!");
    }
});
