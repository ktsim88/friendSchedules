const schedules = ["kristen.json", "nandika.json", "shagan.json", "yasmina.json"];
let scheduleIndex = 0;
const names = ["Kristen", "Nandika", "Shagan", "Yasmina"];
let nameIndex = 0;

async function loadSchedule() {
  try {
    const res = await fetch(`json/${schedules[scheduleIndex]}`);
    const data = await res.json();

    const container = document.getElementById("schedulesSection");
    container.innerHTML = ""; // clear previous content

    data.forEach(schedule => {
      const html = `
        <div class="col-sm-12 col-md-4">
          <div class="card my-3 py-2">
            <div class="card-header">Period ${schedule.period}</div>
            <div class="card-body">
              <h5 class="card-title">${schedule.className}</h5>
              <p class="card-text">
                Teacher: ${schedule.teacher} <br>
                Room: ${schedule.roomNumber} <br>
                Subject: ${schedule.subjectArea}
              </p>
            </div>
          </div>
        </div>`;
      container.insertAdjacentHTML("beforeend", html);
    });
  } catch (err) {
    document.getElementById("schedulesSection").textContent =
      "Network error: " + err;
  }
}

const dblClickSection = document.getElementById("doubleClickSection");

dblClickSection.addEventListener("dblclick", () => {
  // Increment indices first
  scheduleIndex++;
  nameIndex++;

  // Reset if past the end of arrays
  if (scheduleIndex >= schedules.length){ scheduleIndex = 0;
      
  }
  if (nameIndex >= names.length){ 
      nameIndex = 0;
      
  }

  // Update displayed name
  document.getElementById("scheduleName").textContent = 
    `You are viewing ${names[nameIndex]}'s Schedule`;

  // Load the schedule for the current index
  loadSchedule();
});


loadSchedule();
