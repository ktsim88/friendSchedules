//arrays for event listener
const schedules = ["kristen.json", "nandika.json", "shagan.json", "yasmina.json"];
let scheduleIndex = 0;
const names = ["Kristen", "Nandika", "Shagan", "Yasmina"];
let nameIndex = 0;
//async function
async function loadSchedule() {
  // this will try to get the json files
  try {
  //will catch json file
    const res = await fetch(`json/${schedules[scheduleIndex]}`);
    const data = await res.json();
    //container var
    const container = document.getElementById("schedulesSection");
    container.innerHTML = ""; // clear previous content
// using a for each loop to display all cards
    data.forEach(schedule => {
      const html = `
        <div class="col-sm-12 col-md-4 my-3 py-1">
          <div class="card h-100">
            <div class="card-header">Period ${schedule.period}</div>
            <div class="card-body">
              <h5 class="card-title">${schedule.className}</h5>
              <p class="card-text">
                <b>Teacher:</b> ${schedule.teacher} <br>
                <b>Room:</b> ${schedule.roomNumber} <br>
                <b>Subject:</b> ${schedule.subjectArea}
              </p>
            </div>
          </div>
        </div>`;
      //builds each card into container
      container.insertAdjacentHTML("beforeend", html);
    });
    //catches error
  } catch (err) {
    document.getElementById("schedulesSection").textContent =
      `<p>Network Error: ${err}</p>`;
  }
}
// id for double click section
const dblClickSection = document.getElementById("doubleClickSection");

dblClickSection.addEventListener("dblclick", () => {
  //increment 
  scheduleIndex++;
  nameIndex++;

  // reset to index 0 after it hits the array's length
  if (scheduleIndex >= schedules.length) {
    scheduleIndex = 0;   
  }
  if (nameIndex >= names.length){ 
      nameIndex = 0;
  }

  // update  name
  document.getElementById("scheduleName").textContent = 
    `You are viewing ${names[nameIndex]}'s Schedule`;

  // load the schedule for the current index
  loadSchedule();
});

//load current schedule
loadSchedule();
