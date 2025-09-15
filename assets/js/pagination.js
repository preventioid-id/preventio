document.addEventListener("DOMContentLoaded", function () {
	const sections = document.querySelectorAll(".features section");
	const itemsPerPage = 4;
	let currentPage = 1;
	const totalPages = Math.ceil(sections.length / itemsPerPage);

	const prevButton = document.getElementById("prev-page");
	const nextButton = document.getElementById("next-page");
	const paginationContainer = document.getElementById("pagination-buttons");

	function showPage(page) {
		currentPage = page;

		sections.forEach((section, index) => {
			section.style.display = "none";
		});

		const start = (page - 1) * itemsPerPage;
		const end = start + itemsPerPage;

		for (let i = start; i < end && i < sections.length; i++) {
			sections[i].style.display = "block";
		}

		updatePagination();
	}

	function updatePagination() {
		// Reset buttons
		paginationContainer.innerHTML = "";

		for (let i = 1; i <= totalPages; i++) {
			const btn = document.createElement("button");
			btn.textContent = i;
			btn.classList.add("page-btn");
			if (i === currentPage) {
				btn.disabled = true;
				btn.style.fontWeight = "bold";
			}
			btn.addEventListener("click", () => showPage(i));
			paginationContainer.appendChild(btn);
		}

		prevButton.disabled = currentPage === 1;
		nextButton.disabled = currentPage === totalPages;
	}

	prevButton.addEventListener("click", () => {
		if (currentPage > 1) {
			showPage(currentPage - 1);
		}
	});

	nextButton.addEventListener("click", () => {
		if (currentPage < totalPages) {
			showPage(currentPage + 1);
		}
	});

	// Tampilkan halaman pertama
	showPage(currentPage);
});
