let legend = '';

const generateCalendar = _ => {
	// remove any previously generated elements
	document.querySelectorAll(".calendar").forEach(node => node.remove());
	document.querySelectorAll("h1").forEach(node => node.remove());
	document.querySelectorAll(".footer").forEach(node => node.remove());
	document.querySelectorAll(".footerhead").forEach(node => node.remove());
	document.querySelectorAll(".spacer").forEach(node => node.remove());
	legend = '';
	// make elements
	let year = Number.parseInt(document.querySelector('#year').value);
	let month = Number.parseInt(document.querySelector('#month').value);
	// console.log(`generating Calendar for ${year} and ${month}`);

	for (let index = 0; index < 12; index++) {
		makeMonth(month, year);
		if (month === 11) {
			year = year + 1;
		}
		month = (month+1) % 12;
	}

	let monimgKey = findKeyByPrefix(monimgs, '0.');
	if(monimgKey) {
		legend += '<tr><td>&nbsp;</td><td> &nbsp;<strong>' + monimgs[monimgKey][1] + '</strong> </td><td><a href="' + monimgs[monimgKey][0] + '">' + monimgs[monimgKey][0] + '</a></td></tr>';
	}

	const footerhead = document.createElement('div');
	footerhead.classList.add('footerhead');

	const footer = document.createElement('div');
	footer.classList.add('footer');
	if(legend) {
		footer.innerHTML = '<table class="legend-item">' + legend + '</table>';
		if(monimgKey){
			footerhead.style += ";background-image: url('./img/month/" + monimgKey + "')"; //0.jpg
		}
	}else{
		footer.style = 'display:none';
	}

	const spacer = document.createElement('div');
	spacer.style="height:4cm";
	spacer.classList.add('spacer');
	document.body.appendChild(spacer);
	document.body.appendChild(footerhead);
	document.body.appendChild(footer);

	let i = 0;
	document.querySelectorAll(".calendar").forEach(node => {
		if(node.offsetHeight > 1050){
			if(i == 0){
				node.style += ";margin-top:-158px";
			}else{
				node.style += ";margin-top:-180px";
			}
		}
		i++;
	});
}

const findKeyByPrefix = (arr, keyprefix) => {
	let foundkey = '';
	Object.keys(arr).every(key => {
		if(key.indexOf(keyprefix) === 0) {
			foundkey = key;
			return false;
		}
		return true;
	});
	return foundkey;
}

const makeMonth = (month, year) => {
	// console.log(`Making ${(month+1)}.${year}`);
	const first = firstDay(year, month);
	const last = lastDay(year, month);
	const heading = makeHeading(first);
	const calendar = makeCalendar();
	let running = new Date(first);
	let emptyNeeded = first.getDay() === 0 ? 6 : first.getDay() -1;
	let dayCount = 1;
	for (let index = 0; index < emptyNeeded; index++) {
		const empty = makeEmpty(running);
		calendar.appendChild(empty);
		dayCount ++;
	}

	const imgkey = findKeyByPrefix(monimgs, ((month+1)+'.'));

	if(imgkey){
		const monthimg = document.createElement('a');
		monthimg.classList.add('monthbg');
		monthimg.style = `display:block;background-image: url("./img/month/${imgkey}")`;
		// console.log(''+(month+1), monimgs[imgkey][0], monimgs[imgkey][1]);
		monthimg.href = monimgs[imgkey][0];
		monthimg.target = "_blank";
		heading.appendChild(monthimg);

		let imgname = monimgs[imgkey][1];
		if(imgname.indexOf('<') > -1){
			imgname = (imgname.match(/<.*>(.*?)<.*>/))[1];
		}

		legend += '<tr><td>' + (month+1) + '</td><td> &nbsp;<strong>' + imgname + '</strong> </td><td><a href="' + monimgs[imgkey][0] + '">' + monimgs[imgkey][0] + '</a></td></tr>';
	}

	while (running.getDate() < last.getDate()) {
		const day = makeDay(running, dayCount);
		calendar.appendChild(day);
		running.setDate(running.getDate() + 1);
		dayCount++;
	}
	const day = makeDay(last);
	calendar.appendChild(day);

	document.body.appendChild(heading);
	document.body.appendChild(calendar);
}

const makeCalendar = _ => {
	const el = document.createElement('div');
	el.classList.add('calendar');
	return el;
}

const makeEmpty = _ => {
	const el = document.createElement('div');
	el.classList.add('empty');
	return el;
}

const makeHeading = (date) => {
	const el = document.createElement('h1');
	const year = `<sup>${date.getFullYear()}</sup>`;
	const monthName = `<span>${months[date.getMonth()]}</span>`;
	el.innerHTML = monthName + year;
	return el;
}

const makeDay = (date, dayCount) => {
	const number = date.getDate();
	const md = (date.getMonth()+1) + '-' + number;
	const wd = weekdays[date.getDay()];
	const day = document.createElement('div');
	day.classList.add('day');
	if (dayCount <= 7) {
		day.classList.add('top');
	}
	const weekday = document.createElement('div');
	weekday.classList.add('weekday');
	weekday.innerText = wd;
	day.appendChild(weekday);
	const dayNumber = document.createElement('h2');
	dayNumber.innerText = number;
	day.appendChild(dayNumber);

	const imgkey = findKeyByPrefix(imgs, (md+'.'));

	if(imgs[imgkey]){
		const weekdayimg = document.createElement('a');
		weekdayimg.classList.add('wi');
		if(imgs[imgkey][0]){
			weekdayimg.href = imgs[imgkey][0];
			weekdayimg.target = "_blank";
		}

		let style = 'display:block;background-image: url(./img/' + imgkey + ')';
		// console.log(imgs[md][2]);
		if(imgs[imgkey][2]){
			style += imgs[imgkey][2];
		}
		weekdayimg.style = style;

		day.appendChild(weekdayimg);

		const content = document.createElement('div');
		content.classList.add('wt');
		content.innerHTML = imgs[imgkey][1];
		day.appendChild(content);

		let imgname = imgs[imgkey][1];
		if(imgname.indexOf('<') > -1){
			imgname = (imgname.match(/<.*>(.*?)<.*>/))[1];
		}

		legend += '<tr><td>' + md.replace('-', '/') + '</td><td> &nbsp;<strong>' + imgname + '</strong> </td><td><a href="' + imgs[imgkey][0] + '">' + imgs[imgkey][0] + '</a></td></tr>';
	}

	return day;
}

const firstDay = (year, month) => {
	return new Date(year, month, 1);
}

const lastDay = (year, month) => {
	return new Date(year, month+1, 0);
}

const populateYears = _ => {
	let date = new Date();
	const select = document.querySelector("#year");
	for (let index = 0; index < 10; index++) {
		const option = document.createElement("option");
		option.setAttribute("value", date.getFullYear());
		option.innerText = date.getFullYear();
		select.appendChild(option);
		date.setFullYear(date.getFullYear() + 1);
	}
}

document.querySelector('#generate').addEventListener('click', generateCalendar);
window.addEventListener('load', populateYears);
