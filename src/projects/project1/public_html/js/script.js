function addNav(published_only){
	const menu = document.querySelector("nav.top-level");
	const pages = {
		"Home": "/index.html",
		"Topic": null,
		"Research": "/realistic_research.html",
		"Data": "/formatting_research_data.html",
		"References": null,
		"Style": null,
		"Layout": null,
		"Modality": null,
		"Professionalization": null,
	};
	const list = document.createElement("ul");
	for (const page in pages) {
		const url = pages[page];
		if(published_only && url == null){ continue;}
		const li = document.createElement("li");
		const link = document.createElement("a");
		link.href = url ? url : "/placeholder.html"; // Default page
		link.innerText = page;
		li.appendChild(link);
		list.appendChild(li);
	}
	menu.appendChild(list);
}