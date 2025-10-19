// async/await version with DOM update:
async function loadSchedule () {
	try {
		const schedule = await fetch("kristen.json");
		const data = await schedule.json();
		//for each loop that gets the objects from json files and displays them
    data.forEach(schedule => {
        const html =`
       <div class="col-sm-12 col-md-4">
                <div class="card my-3 py-2">
  <div class="card-header">
    Period ${schedule.period}
  </div>
  <div class="card-body">
    <h5 class="card-title">${schedule.className}</h5>
    <p class="card-text">Teacher: ${schedule.teacher} <br> Room: ${schedule.roomNumber} <br> Subject: ${schedule.subjectArea}</p>
  </div>
</div>
            </div>`
        document.getElementById("schedules").insertAdjacentHTML("beforeend", html);
    });

} catch (err) {
	document.getscheduleById("schedules").textContent = "Network error:" + err;

}

}
loadSchedule();
