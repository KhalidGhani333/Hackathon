// Function to add an additional education field
function addEducationField() {
    const educationSection = document.getElementById('education-section') as HTMLDivElement;
    const newEducationEntry = document.createElement('div');
    newEducationEntry.className = 'education-entry';
    newEducationEntry.innerHTML = `
        <label>Degree and School:</label>
        <input type="text" class="education" name="education" required>
    `;
    educationSection.appendChild(newEducationEntry);
}

// Function to add an additional work field
function addWorkField() {
    const workSection = document.getElementById('work-section') as HTMLDivElement;
    const newWorkEntry = document.createElement('div');
    newWorkEntry.className = 'work-entry';
    newWorkEntry.innerHTML = `
        <label>Position and Company:</label>
        <input type="text" class="work" name="work" required>
    `;
    workSection.appendChild(newWorkEntry);
}

// Function to add an additional skill field
function addSkillField() {
    const skillsSection = document.getElementById('skills-section') as HTMLDivElement;
    const newSkillEntry = document.createElement('div');
    newSkillEntry.className = 'skills-entry';
    newSkillEntry.innerHTML = `
        <label>Skill:</label>
        <input type="text" class="skill" name="skills" required>
    `;
    skillsSection.appendChild(newSkillEntry);
}

// Function to add an additional skill field
function addHobbiesField() {
    const hobbySection = document.getElementById('Hobbies-section') as HTMLDivElement;
    const newhobbyEntry = document.createElement('div');
    newhobbyEntry.className = 'hobby-entry';
    newhobbyEntry.innerHTML = `
        <label>Hobby:</label>
        <input type="text" class="hobby" name="hobby" required>
    `;
    hobbySection.appendChild(newhobbyEntry);
}

//Show input feilds on the clicking on start button
const startButton = document.getElementById("startButton") as HTMLButtonElement;
const container = document.getElementById("container") as HTMLDivElement;
const openButton = document.getElementById("openButton") as HTMLDivElement;


if (startButton && container ) {
  startButton.addEventListener("click", () => {
    openButton.style.display = "none";
    container.style.display = "block";
  });
} 


// Generate the resume content on form submission
document.getElementById('resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Capture user inputs
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const profilePictureFile = profilePictureInput.files ? profilePictureInput.files[0] : null;
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

    const educations = Array.from(document.getElementsByClassName('education') as HTMLCollectionOf<HTMLInputElement>).map(input => input.value);
    const works = Array.from(document.getElementsByClassName('work') as HTMLCollectionOf<HTMLInputElement>).map(input => input.value);
    const skills = Array.from(document.getElementsByClassName('skill') as HTMLCollectionOf<HTMLInputElement>).map(input => input.value);
    const hobbies = Array.from(document.getElementsByClassName('hobby') as HTMLCollectionOf<HTMLInputElement>).map(input => input.value);
    
    // the resume section with the gathered information
    const generatedResume = document.getElementById('generated-resume') as HTMLDivElement;
    generatedResume.innerHTML = `
        <div class="resume-content">
            <h3>Personal Information</h3>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
           
           
            
            <h3>Education</h3>
            <ul>${educations.map(edu => `<li>${edu}</li>`).join('')}</ul>

            <h3>Work Experience</h3>
            <ul>${works.map(work => `<li>${work}</li>`).join('')}</ul>
             
            <h3>Skills</h3>
            <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>

            <h3>Hobbies</h3>
            <ul>${hobbies.map(hobbies => `<li>${hobbies}</li>`).join('')}</ul>
            </div>
    `;

    document.getElementById('resume')!.style.display = 'block';
});

