const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const TIME_SLOTS = [
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
];

const G_FORM_APP = "https://script.google.com/macros/s/AKfycbwo8hvSpvR3gKxkU94BQ_pzPYmNde3uvl_9RZr54aVYu8vUUt99BkG72t2ase5sIexIjg/exec";

function setupDatePicker() {
  const wrapper = document.querySelector("#date-picker");
  const days = getNextDays(4);

  days.forEach((day, index) => {
    wrapper.appendChild(createDateElement(day, index === 0));
  });
}

function getNextDays(n) {
  const days = [];
  const today = new Date();
  for (let i = 0; i < n; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    days.push(date);
  }
  return days;
}

function createDateElement(date, isDefault = false) {
  const id = date.toISOString().split("T")[0];
  const root = document.createElement("label");
  root.classList.add("radio__button");
  root.setAttribute("for", id);
  const inputElement = document.createElement("input");
  inputElement.classList.add("radio__reset");
  inputElement.setAttribute("type", "radio");
  inputElement.setAttribute("name", "date");
  inputElement.setAttribute("id", id);
  inputElement.setAttribute("value", id);
  if (isDefault) {
    inputElement.setAttribute("checked", "");
    inputElement.setAttribute("required", "");
  }
  root.appendChild(inputElement);

  const dayElement = document.createElement("span");
  dayElement.textContent = DAYS[date.getDay()];
  root.appendChild(dayElement);

  const dateElement = document.createElement("span");
  dateElement.textContent = `${date.getDate()} ${MONTHS[date.getMonth()]}`;
  
  root.appendChild(dateElement);
  return root;
}

function setupTimePicker() {
  const wrapper = document.querySelector("#time-picker");
  TIME_SLOTS.forEach((time, index) => {
    wrapper.appendChild(createTimeElement(time, index === 0));
  });
}

function createTimeElement(time, isDefault = false) {
  const root = document.createElement("label");
  root.classList.add("radio__button");
  root.setAttribute("for", time);
  const inputElement = document.createElement("input");
  inputElement.classList.add("radio__reset");
  inputElement.setAttribute("type", "radio");
  inputElement.setAttribute("name", "time");
  inputElement.setAttribute("value", time);
  inputElement.setAttribute("id", time);
  if (isDefault) {
    inputElement.setAttribute("checked", "");
    inputElement.setAttribute("required", "");
  }
  root.appendChild(inputElement);

  const timeElement = document.createTextNode(time);
  root.appendChild(timeElement);

  return root;
}

function setupForm() {
  const form = document.forms['reg-form']
  const submitButton = document.querySelector("#reg-form-submit");

  form.addEventListener("submit", async (event) => {
    submitButton.disabled = true;
    event.preventDefault();

    let formData = new FormData(form);
    const requestBody = {};
    for (var [key, value] of formData.entries()) { 
      requestBody[key] = value;
    }
    requestBody["video-played"] = window.videoPlayed ?? false;
    requestBody["sheet"] = 'Sheet1'
    try {
      const response = await fetch(G_FORM_APP, {
        method: "POST",
        body: JSON.stringify(requestBody),
      });
      const {result, ...data} = await response.json();
      if (result !== "success") {
        console.error(`ERROR: ${JSON.stringify(data.error)}}`);
        submitButton.innerHTML = "Error!";
      } else {
        submitButton.innerHTML = "Demo Booked!";
      }
    } catch (error) {
      console.error(error);
      submitButton.disabled = false;
    }
  });
}

function setupYoutubeVideo() {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  window.onYouTubeIframeAPIReady = ()=> {
    window.player = new YT.Player("yt-player", {
      width: '320',
      videoId: "k6D28uDBpcU",
      events: {
        onStateChange: onPlayerStateChange,
      },
    });
  }

  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
      window.videoPlayed = true;
    }
  }

}

function main() {
  setupDatePicker();
  setupTimePicker();
  setupForm();
  setupYoutubeVideo();
}

main();
