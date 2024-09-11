const form = document.getElementById("resume-form") as HTMLFormElement;
const generatedResume = document.getElementById("generated-resume") as HTMLElement;

form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); 

    // Fetch form data
    const profilePictureInput = (document.getElementById('profilePicture') as HTMLInputElement)
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const work = (document.getElementById("work") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;

    const profilePictureFile =profilePictureInput.files?.[0]
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

    if ( profilePictureInput && name && email && phone && education && work && skills) {
        // dynamic resume content
        generatedResume.innerHTML = `
            <div class="resume-content">
                <h3 class="section-header">Personal Information</h3>
                ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` :"" }
                <p contenteditable="true"><strong>Name:</strong> ${name}</p>
                <p contenteditable="true"><strong>Email:</strong> ${email}</p>
                <p contenteditable="true"><strong>Phone:</strong> ${phone}</p>

                <h3 class="section-header">Education</h3>
                <p contenteditable="true">${education}</p>

                <h3 class="section-header">Work Experience</h3>
                <p contenteditable="true">${work}</p>

                <h3 class="section-header">Skills</h3>
                <p contenteditable="true">${skills.split(',').map(skill => `<span class="skill">${skill.trim()}</span>`).join(' ')}</p>
            </div> `;

            //Editable functionality for each section
        makeSectionsEditable();

    } else {
        alert("Please fill in all fields!");
    }
});

// Function to make resume sections editable
function makeSectionsEditable() {
    const editableSections = document.querySelectorAll('[contenteditable="true"]');

    editableSections.forEach(section => {
        section.addEventListener('input', (element) => {
            const target = element.target as HTMLElement;
            console.log(`Content updated: ${target.innerHTML}`);
           
        });
    });
}

 