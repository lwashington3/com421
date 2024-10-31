function addNav(published_only){
	const menu = document.querySelector("nav.top-level");
	const pages = {
		"Home": ["/index.html", "fa-solid fa-house"],
		"Topic": null,
		"Research": ["/realistic_research.html", ""],
		"Data": ["/formatting_research_data.html", ""],
		"References": null,
		"Style": null,
		"Layout": null,
		"Modality": null,
		"Professionalization": null,
	};
	// const list = document.createElement("ul");
	// list.setAttribute("class", "nav");
	const bar = document.createElement("div");
	bar.setAttribute("class", "navbar");
	for (const page in pages) {
		const info = pages[page];
		if(published_only && info == null){ continue; }
		let url = "/placeholder.html";
		let iconValue = "fa-solid fa-x";
		if(info != null){
			url = info[0];
			iconValue = info[1];
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
		back.setAttribute("class", "flip-box-back");

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