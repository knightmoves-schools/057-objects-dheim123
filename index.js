const school = {
    name: "Lincoln High School",
    "average class size": 25,
    mascot: "lion"
};

const name = school.name;
const averageClassSize = school["average class size"];
const mascot = school.mascot;

document.getElementById('result').innerHTML = `${name} has an average class size of ${averageClassSize} and their mascot is a ${mascot}`;



