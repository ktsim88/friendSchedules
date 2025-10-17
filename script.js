// async/await version with DOM update:
async function loadSchedule () {
	try {
		const schedule = await fetch("kristen.json");
		const data = await schedule.json();
		
    data.forEach(element => {
        document.getElementById("schedules").innerHTML += `
        <h2>${element.className}</h2>
        <p>${element.teacher}</p>
        <p>${element.roomNumber}</p>
        <p>${element.period}</p>
        <p>${element.subjectArea}</p>
        `
    });

} catch (err) {
	document.getElementById("schedules").textContent = "Network error:" + err;

}

}
loadSchedule();
