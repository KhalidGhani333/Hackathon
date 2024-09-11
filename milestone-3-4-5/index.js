var form = document.getElementById("resume-form");
var generatedResume = document.getElementById("generated-resume");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh
    // Fetch form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var work = document.getElementById("work").value;
    var skills = document.getElementById("skills").value;
    // Validate inputs (can be expanded for more validation)
    if (name && email && phone && education && work && skills) {
        // Create the dynamic resume content
        generatedResume.innerHTML = "\n            <div class=\"resume-content\">\n                <h3 class=\"section-header\">Personal Information</h3>\n                <p><strong>Name:</strong> ".concat(name, "</p>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n                <h3 class=\"section-header\">Education</h3>\n                <p>").concat(education, "</p>\n\n                <h3 class=\"section-header\">Work Experience</h3>\n                <p>").concat(work, "</p>\n\n                <h3 class=\"section-header\">Skills</h3>\n                <p>").concat(skills.split(',').map(function (skill) { return "<span class=\"skill\">".concat(skill.trim(), "</span>"); }).join(' '), "</p>\n            </div>\n        ");
    }
    else {
        alert("Please fill in all fields!");
    }
});
