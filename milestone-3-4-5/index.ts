const form = document.getElementById("resume-form") as HTMLFormElement;
const generatedResume = document.getElementById("generated-resume") as HTMLElement;
const shareableLinkContainer = document.getElementById("shareable-link-container")as HTMLDivElement;
const shareableLinkElement = document.getElementById("shareable-link")as HTMLAnchorElement;
const downloadPdfButton = document.getElementById("download-pdf")as HTMLButtonElement;


form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); 

    // Fetch form data
    const username = (document.getElementById("username")as HTMLInputElement).value;
    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const work = (document.getElementById("work") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;

    //save form data in localstorage with the username as the key
    const resumeData ={
        name,
        email,
        phone,
        education,
        work,
        skills
    };
    localStorage.setItem(username,JSON.stringify(resumeData));//save the data locally


    const profilePictureFile = profilePictureInput.files?.[0]
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

    if (profilePictureInput && name && email && phone && education && work && skills) {
        // dynamic resume content
        generatedResume.innerHTML = `
            <div class="resume-content">
                <h3 class="section-header">Personal Information</h3>
                ${profilePictureURL ? `<img src="${profilePictureURL}"alt="Profile Picture" class="profilePicture">`: ''}
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

    //generate a shareable URL with the username only
    const shareableURL = `${window.location.origin}?username =${encodeURIComponent(username)}`

    //display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL
    shareableLinkElement.textContent = shareableURL

});

//handle PDF Download
downloadPdfButton.addEventListener("click",() => { window.print();}); //this will open print dialog

//prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded',() => {
    const URLparam = new URLSearchParams(window.location.search);
    const username = URLparam.get('username');

    if(username){
        //autofill form if data is found in localstorage
        const saveResumeData =localStorage.getItem(username);
        if(saveResumeData){
            const resumeData =JSON.parse(saveResumeData);
            (document.getElementById('username')as HTMLInputElement).value=username;
            (document.getElementById("profilePicture") as HTMLInputElement).value=resumeData.profilePicture;
            (document.getElementById('name')as HTMLInputElement).value=resumeData.name;
            (document.getElementById('email')as HTMLInputElement).value=resumeData.email;
            (document.getElementById('phone')as HTMLInputElement).value=resumeData.phone;
            (document.getElementById('education')as HTMLInputElement).value=resumeData.education;
            (document.getElementById('work')as HTMLInputElement).value=resumeData.work;
            (document.getElementById('skills')as HTMLInputElement).value=resumeData.skills;
        }
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



    