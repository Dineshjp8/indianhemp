document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    const alphabetFilter = document.getElementById("alphabetFilter");
    const searchIcon = document.getElementById("searchIcon");
    const searchContainer = document.getElementById("searchContainer");
    const searchInput = document.getElementById("searchInput");

    // Function to sort accordion items alphabetically
    function sortAccordionAlphabetically(order) {
        const container = document.querySelector(".accordions-container");
        const items = container.querySelectorAll(".accordion");

        const sortedItems = Array.from(items).sort((a, b) => {
            const textA = a.querySelector(".accordion-header span").textContent.toUpperCase();
            const textB = b.querySelector(".accordion-header span").textContent.toUpperCase();
            if (order === "asc") {
                return textA.localeCompare(textB);
            } else {
                return textB.localeCompare(textA);
            }
        });

        // Clear existing accordion items
        container.innerHTML = '';

        // Append sorted accordion items to container
        sortedItems.forEach(item => {
            container.appendChild(item);
        });
    }

    // Event listener for alphabet filter change
    alphabetFilter.addEventListener("change", function() {
        const sortOrder = this.value === "A" ? "asc" : "desc";
        sortAccordionAlphabetically(sortOrder);
    });

    // Event listener for accordion header click
    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const accordionItem = this.parentNode;
            const isActive = accordionItem.classList.contains("active");

            // Close all accordion items
            document.querySelectorAll(".accordion-item").forEach(item => {
                item.classList.remove("active");
            });

            if (!isActive) {
                // Open the clicked accordion
                accordionItem.classList.add("active");
            }
        });
    });

    // Event listener for search icon click
    searchIcon.addEventListener("click", function() {
        searchContainer.style.display = "block";
    });

    // Event listener for search input
    searchInput.addEventListener("input", function() {
        const searchText = this.value.toLowerCase().trim();
        const accordions = document.querySelectorAll(".accordion");

        accordions.forEach(accordion => {
            const accordionContent = accordion.querySelector(".accordion-content").textContent.toLowerCase();
            if (accordionContent.includes(searchText)) {
                accordion.style.display = "block";
            } else {
                accordion.style.display = "none";
            }
        });
    });
});
