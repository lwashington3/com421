function onLoad(published_only){
	addNav(published_only);
	addFigureNumbers();
}

function addNav(published_only){
	const menu = document.querySelector("nav.top-level");
	const pages = {
		"Home": ["./index.html", "fa-house"],
		"Topic": null,
		"Research": ["./realistic_research.html", "fa-microscope"],
		"Data": ["./formatting_research_data.html", "fa-calculator"],
		"References": [null, "fa-book"],
		"Style": [null, "fa-paintbrush"],
		"Layout": null,
		"Modality": [null, "fa-boxes-stacked"],
		"Professionalization": null,
	};

	const bar = document.createElement("div");
	bar.hidden = false;
	bar.setAttribute("class", "navbar");

	const menuIcon = document.createElement("button");
	menuIcon.className = "flip-box-front";
	menuIcon.onclick = () => {
		updateCSS(bar.hidden);
		bar.hidden = !bar.hidden;
	};
	const mIcon = document.createElement("i");
	mIcon.setAttribute("class", "fa-solid fa-bars");
	menuIcon.append(mIcon);
	menu.append(menuIcon);

	for (const page in pages) {
		const info = pages[page];
		let valid = !(info == null || info[0] == null);
		if(published_only && !valid){ continue; }
		let url = "./placeholder.html";
		let iconValue = "fa-x";
		if(valid){
			url = info[0];
		}
		if(info != null){
			iconValue = `fa-solid ${info[1]}`;
		}
		const link = document.createElement("a");
		link.href = url; // Default page
		link.setAttribute("class", "dropbtn");

		const box = document.createElement("button");
		box.setAttribute("class", "flip-box nav-buttons");
		box.style.width = `${100/pages.length}%`;
		console.log(box.style.width);

		const inner = document.createElement("div");
		inner.setAttribute("class", "flip-box-inner");

		const front = document.createElement("div");
		front.setAttribute("class", "flip-box-front");

		const text = document.createElement("h1");
		text.innerHTML = page;

		const back = document.createElement("div");
		back.classList.add("flip-box-back", valid ? "valid" : "invalid");

		const icon = document.createElement("i");
		icon.setAttribute("class", iconValue);

		front.appendChild(text);
		back.appendChild(icon);

		inner.appendChild(front);
		inner.appendChild(back);
		box.appendChild(inner);
		link.appendChild(box);

		bar.append(link);
	}
	menu.appendChild(bar);
}

function addFigureNumbers(){
	const captions = document.querySelectorAll("figcaption");
	for(let i = 0; i < captions.length; i++){
		captions[i].innerText = `Figure ${i+1}: ${captions[i].innerText}`;
	}
}

function updateCSS(addSpace){
	const stylesheet = Array.from(document.styleSheets).filter(function(sheet){
		if(sheet.href === undefined || sheet.href == null){
			return false;
		}
		console.log(sheet.href);
		return sheet.href.endsWith("css/style.css")
	})[0];
	const rule = Array.from(stylesheet.cssRules).filter((styleRule) => styleRule.selectorText === ".main")[0];
	rule.style.marginLeft = addSpace ? "200px" : "0px";
}