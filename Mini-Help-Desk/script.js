const form = document.getElementById("ticketForm");
const ticketList = document.getElementById("ticketList");
const errorMsg = document.getElementById("errorMsg");

// DELETE for existing tickets
document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        btn.parentElement.remove();
    });
});

// ADD TICKET
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value;
    const priority = document.getElementById("priority").value;

    // VALIDATION
    if (title === "") {
        errorMsg.textContent = "Ticket subject is required.";
        return;
    }

    errorMsg.textContent = "";

    // CREATE NEW TICKET
    const ticket = document.createElement("div");
    ticket.classList.add("ticket");

  ticket.innerHTML = `
    <div>
        <strong>${title}</strong>
        <p>${description}</p>
    </div>
    <span class="priority ${priority.toLowerCase()}">${priority}</span>
    <button class="btn delete-btn">Delete</button>
`;

    // DELETE EVENT
    ticket.querySelector(".delete-btn").addEventListener("click", function () {
        ticket.remove();
    });

    ticketList.appendChild(ticket);

    form.reset();
});