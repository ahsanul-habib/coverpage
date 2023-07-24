const rollValue = localStorage.getItem("roll");

if (rollValue) {
  document.getElementById("roll").value = rollValue;
}

const rollValue_lab = localStorage.getItem("roll_lab");

if (rollValue_lab) {
  document.getElementById("roll_lab").value = rollValue_lab;
}

const isMobile = /Mobi|Android/i.test(navigator.userAgent);

if (isMobile) {
  var popupContent = document.querySelectorAll(".popup-content");
  for (var i = 0; i < popupContent.length; i++) {
    popupContent[i].style.transform = "scale(1.7)";
    popupContent[i].style.maxWidth = "150%";
  }

  var openPopupContent = document.querySelectorAll(
    ".popup.open .popup-content"
  );
  for (var i = 0; i < openPopupContent.length; i++) {
    openPopupContent[i].style.transform = "scale(1.5)";
  }

  var body = document.body;
  body.style.backgroundImage =
    "linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(199, 183, 183, 0.95))";

  var btns = document.querySelectorAll(".btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].style.transform = "scale(1.3)";

    btns[i].addEventListener("touchstart", function () {
      this.style.transform = "scale(1.5)";
    });

    btns[i].addEventListener("touchend", function () {
      this.style.transform = "scale(1.3)";
    });
  }
}

function togglePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.classList.toggle("open");
}

let teacher_list = {};
let course_details = {};
let course_details_lab = {};
let student_data = {};

fetch("https://smartcoverbuilder.000webhostapp.com/student_data.json")
  .then((response) => response.json())
  .then((data) => {
    student_data = data;
  })
  .catch((error) => {
    console.error("Error: ", error);
  });

fetch("https://smartcoverbuilder.000webhostapp.com/teacher_data.json")
  .then((response) => response.json())
  .then((data) => {
    teacher_list = data;
    var options = "";
    Object.keys(data).forEach((element) => {
      options +=
        "<option value='" +
        element +
        "'>" +
        data[element]["name"] +
        "</option>\n";
    });
    document.querySelector("#teacher_name").innerHTML = options;
    document.querySelector("#teacher_name_lab").innerHTML = options;
  })
  .catch((error) => {
    console.error("Error: ", error);
  });

fetch("https://smartcoverbuilder.000webhostapp.com/course_data.json")
  .then((response) => response.json())
  .then((data) => {
    course_details = data;
    var options = "";
    Object.keys(data).forEach((element) => {
      options +=
        "<option value='" +
        element +
        "'>" +
        data[element]["code"] +
        "</option>\n";
    });
    document.querySelector("#course_code").innerHTML = options;
  })
  .catch((error) => {
    console.error("Error: ", error);
  });

fetch("https://smartcoverbuilder.000webhostapp.com/course_data_lab.json")
  .then((response) => response.json())
  .then((data) => {
    course_details_lab = data;
    var options = "";
    Object.keys(data).forEach((element) => {
      options +=
        "<option value='" +
        element +
        "'>" +
        data[element]["code"] +
        "</option>\n";
    });
    document.querySelector("#course_code_lab").innerHTML = options;
  })
  .catch((error) => {
    console.error("Error: ", error);
  });
