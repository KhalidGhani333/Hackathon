var form = document.getElementById("resume-form");
var generatedResume = document.getElementById("generated-resume");
form.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Fetch form data
    var profilePictureInput = document.getElementById('profilePicture');
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var work = document.getElementById("work").value;
    var skills = document.getElementById("skills").value;
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
    if (profilePictureInput && name && email && phone && education && work && skills) {
        // dynamic resume content
        generatedResume.innerHTML = "\n            <div class=\"resume-content\">\n                <h3 class=\"section-header\">Personal Information</h3>\n                ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n                <p contenteditable=\"true\"><strong>Name:</strong> ").concat(name, "</p>\n                <p contenteditable=\"true\"><strong>Email:</strong> ").concat(email, "</p>\n                <p contenteditable=\"true\"><strong>Phone:</strong> ").concat(phone, "</p>\n\n                <h3 class=\"section-header\">Education</h3>\n                <p contenteditable=\"true\">").concat(education, "</p>\n\n                <h3 class=\"section-header\">Work Experience</h3>\n                <p contenteditable=\"true\">").concat(work, "</p>\n\n                <h3 class=\"section-header\">Skills</h3>\n                <p contenteditable=\"true\">").concat(skills.split(',').map(function (skill) { return "<span class=\"skill\">".concat(skill.trim(), "</span>"); }).join(' '), "</p>\n            </div> ");
        //Editable functionality for each section
        makeSectionsEditable();
    }
    else {
        alert("Please fill in all fields!");
    }
});
// Function to make resume sections editable
function makeSectionsEditable() {
    var editableSections = document.querySelectorAll('[contenteditable="true"]');
    editableSections.forEach(function (section) {
        section.addEventListener('input', function (element) {
            var target = element.target;
            console.log("Content updated: ".concat(target.innerHTML));
        });
    });
}
