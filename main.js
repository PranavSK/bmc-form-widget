const SHEET_NAME = "Sheet2";

const SUBJECT_NAMES = {
  mathSci: "Maths & Science",
  english: "English",
  sst: "Social Studies",
  doubts: "Doubts",
};

const SLOT_OPTIONS = {
  cbse: {
    4: {
      mathSci: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
      english: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
      sst: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
      doubts: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
    },
    5: {
      mathSci: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
      ],
      english: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
      sst: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
      doubts: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
    },
    6: {
      mathSci: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
      english: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
      sst: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
      doubts: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
    },
    7: {
      mathSci: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
      english: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
      sst: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
      doubts: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
    },
    8: {
      mathSci: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
      english: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
      sst: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
      doubts: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
    },
    9: {
      mathSci: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
      english: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
      sst: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
      doubts: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
    },
    10: {
      mathSci: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
      english: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
      sst: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
      doubts: [
        { time: "5:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "6:45pm", days: ["Tue", "Thu", "Sat"] },
        { time: "4:30pm", days: ["Mon", "Wed", "Fri"] },
        { time: "8:00pm", days: ["Mon", "Wed", "Fri"] },
        { time: "9:00pm", days: ["Tue", "Thu", "Sat"] },
      ],
    },
  },
};

const G_FORM_APP =
  "https://script.google.com/macros/s/AKfycbwo8hvSpvR3gKxkU94BQ_pzPYmNde3uvl_9RZr54aVYu8vUUt99BkG72t2ase5sIexIjg/exec";

let currentPage = 0;
const pages = document.querySelectorAll(".page");
const breadcrumbs = [];
const submitButton = document.querySelector("#reg-form-submit");
const nextButton = document.querySelector("#next-button");
const prevButton = document.querySelector("#prev-button");
const form = document.querySelector("#reg-form");

function main() {
  setupForm();

  const boardElement = document.querySelector("#board");
  const gradeElement = document.querySelector("#grade");
  let selectedBoard = boardElement.value;
  let selectedGrade = gradeElement.value;

  boardElement.addEventListener("change", (event) => {
    selectedBoard = event.target.value;
    setupSlots(selectedBoard, selectedGrade);
  });

  gradeElement.addEventListener("change", (event) => {
    selectedGrade = event.target.value;
    setupSlots(selectedBoard, selectedGrade);
  });

  setupSlots(selectedBoard, selectedGrade);

  setupPagination();
}
main();

function setupForm() {
  if (form) form.addEventListener("submit", onSubmit);
  else submitButton.addEventListener("click", onSubmit);
}

async function onSubmit(event) {
  if (currentPage !== pages.length - 1) {
    alert("Please fill all the details.");
    return;
  }

  submitButton.disabled = true;
  event.preventDefault();

  const requestBody = getFormData();
  requestBody.append("sheet", SHEET_NAME);
  try {
    const response = await fetch(G_FORM_APP, {
      method: "POST",
      body: JSON.stringify(requestBody),
    });
    const { result, ...data } = await response.json();
    if (result !== "success") {
      console.error(`ERROR: ${JSON.stringify(data.error)}}`);
      submitButton.innerHTML = "Error! Please contact us.";
    } else {
      submitButton.innerHTML = "Demo Booked!";
    }
  } catch (error) {
    console.error(error);
    submitButton.disabled = false;
  }
}

function setupSlots(board, grade) {
  if (!board || !grade) {
    return;
  }

  const slotsBySubject = SLOT_OPTIONS[board][grade];
  for (const [subject, slots] of Object.entries(slotsBySubject)) {
    let wrapper = document.querySelector(`#${subject}-slots`);
    if (!wrapper) {
      // create the wrapper for the subject.
      const container = document.querySelector("#slots-page");
      const subjectWrapper = document.createElement("div");
      subjectWrapper.classList.add("card__input__wrapper");
      subjectWrapper.innerHTML = `<label for="${subject}-slots" class="card__input__label">${SUBJECT_NAMES[subject]}</label><div id="${subject}-slots" class="radio__wrapper"></div>`;
      container.appendChild(subjectWrapper);
      wrapper = subjectWrapper.querySelector(`#${subject}-slots`);
    }
    // delete existing slots
    while (wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild);
    }
    slots.forEach(({ time, days }, i) => {
      const value = `${time}-${days.join(",")}`;
      const id = `${subject}-${value}`;
      const root = document.createElement("label");
      root.classList.add("radio__button");
      root.setAttribute("for", id);
      const inputElement = document.createElement("input");
      inputElement.classList.add("radio__reset");
      inputElement.setAttribute("type", "radio");
      inputElement.setAttribute("name", subject);
      inputElement.setAttribute("id", id);
      inputElement.setAttribute("value", value);
      inputElement.setAttribute("required", true);
      if (i === 0) inputElement.setAttribute("checked", "true");
      root.appendChild(inputElement);

      const dayElement = document.createElement("span");
      dayElement.textContent = days.join(", ");
      dayElement.style.fontSize = "0.8rem";
      root.appendChild(dayElement);

      const dateElement = document.createElement("span");
      dateElement.textContent = time;

      root.appendChild(dateElement);
      wrapper.appendChild(root);
    });
  }
}

function setupPagination() {
  const breadcrumbsContainer = document.querySelector(".breadcrumbs");

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const breadcrumb = document.createElement("li");
    // breadcrumb.onclick = () => {
    //   gotoPage(i);
    //   currentPage = i;
    // };
    breadcrumbsContainer.appendChild(breadcrumb);
    breadcrumbs.push(breadcrumb);
    breadcrumb.textContent = i + 1;
  }

  nextButton.addEventListener("click", () => {
    if (checkPageComplete()) {
      gotoPage(currentPage + 1);
    }
  });

  prevButton.addEventListener("click", () => {
    gotoPage(currentPage - 1);
  });

  gotoPage(0);
}

function gotoPage(page) {
  breadcrumbs[currentPage].classList.remove("active");
  pages[currentPage].classList.remove("active");
  pages[page].classList.add("active");
  currentPage = page;
  breadcrumbs[currentPage].classList.add("active");

  if (currentPage === pages.length - 1) {
    submitButton.classList.add("active");
  } else {
    submitButton.classList.remove("active");
  }

  if (currentPage === 0) {
    prevButton.classList.remove("active");
  } else {
    prevButton.classList.add("active");
  }

  if (currentPage === pages.length - 1) {
    nextButton.classList.remove("active");
  } else {
    nextButton.classList.add("active");
  }
}

function getFormData() {
  if (form) {
    return new FormData(form);
  } else {
    const formData = new FormData();
    const email = document.querySelector("#email").value;
    const board = document.querySelector("#board").value;
    const grade = document.querySelector("#grade").value;

    formData.append("email", email);
    formData.append("board", board);
    formData.append("grade", grade);

    for (const subject of Object.keys(SUBJECT_NAMES)) {
      const slot = document.querySelector(
        `#${subject}-slots input:checked`
      ).value;
      formData.append(subject, slot);
    }

    return formData;
  }
}

function checkPageComplete() {
  const emailElement = document.querySelector("#email");
  const email = emailElement.checkValidity();
  const boardElement = document.querySelector("#board");
  const board = boardElement.checkValidity();
  const gradeElement = document.querySelector("#grade");
  const grade = gradeElement.checkValidity();

  if (email && board && grade) {
    return true;
  } else {
    gradeElement.reportValidity();
    boardElement.reportValidity();
    emailElement.reportValidity();

    return false;
  }
}
