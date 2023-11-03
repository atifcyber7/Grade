document.getElementById("gradeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var percentage = parseInt(document.getElementById("percentage").value);
    var grade = "";

    if (percentage >= 80) {
        grade = "Your Grade isA+";
    } else if (percentage >= 70) {
        grade = "Your Grade is A";
    } else if (percentage >= 60) {
        grade = "Your Grade is B";
    } else if (percentage >= 50) {
        grade = "Your Grade is C";
    } else {
        grade = "Oh Dude Your grade is F";
    }

    document.getElementById("result").textContent = "Grade: " + grade;
});
