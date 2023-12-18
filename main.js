const SHEET_NAME = "Sheet2";

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

function main() {
  setupForm();

  const boardElement = document.querySelector("#board-select");
  const gradeElement = document.querySelector("#grade-select");
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
}
main();

function setupForm() {
  const form = document.forms["reg-form"];
  const submitButton = document.querySelector("#reg-form-submit");

  form.addEventListener("submit", async (event) => {
    submitButton.disabled = true;
    event.preventDefault();

    let formData = new FormData(form);
    const requestBody = {};
    for (var [key, value] of formData.entries()) {
      requestBody[key] = value;
    }

    requestBody["sheet"] = SHEET_NAME;
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
  });
}

function setupSlots(board, grade) {
  const slotsBySubject = SLOT_OPTIONS[board][grade];
  for (const [subject, slots] of Object.entries(slotsBySubject)) {
    const wrapper = document.querySelector(`#${subject}-slots`);
    // delete existing slots
    while (wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild);
    }
    slots.forEach(({ time, days }) => {
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
