const isMobile = window.innerWidth <= 768;

if (isMobile) {
  alert("Better To Use A Desktop/Laptop!");
}

function togglePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.classList.toggle("open");
}

let teacher_list = {};
fetch("teacher_data.json")
  .then((response) => response.json())
  .then((data) => {
    teacher_list = data;
  })
  .catch((error) => {
    console.error("Error: ", error);
  });

let course_details = {};
fetch("course_data.json")
  .then((response) => response.json())
  .then((data) => {
    course_details = data;
  })
  .catch((error) => {
    console.error("Error: ", error);
  });

let course_details_lab = {};
fetch("course_data_lab.json")
  .then((response) => response.json())
  .then((data) => {
    course_details_lab = data;
  })
  .catch((error) => {
    console.error("Error: ", error);
  });

let student_data = {};
fetch("student_data.json")
  .then((response) => response.json())
  .then((data) => {
    student_data = data;
  })
  .catch((error) => {
    console.error("Error: ", error);
  });

fetch("teacher_data.json")
  .then((response) => response.json())
  .then((data) => {
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

fetch("course_data.json")
  .then((response) => response.json())
  .then((data) => {
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

fetch("course_data_lab.json")
  .then((response) => response.json())
  .then((data) => {
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
