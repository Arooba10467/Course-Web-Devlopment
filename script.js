let editingTicket = null;
const form = document.getElementById("ticketForm");
const ticketList = document.getElementById("ticketList");
const errorMsg = document.getElementById("errorMsg");

document.querySelectorAll(".edit-btn").forEach(btn => {
    btn.addEventListener("click", function () {

        const ticket = btn.parentElement.parentElement;

        const title = ticket.querySelector("strong").textContent;
        const description = ticket.querySelector("p").textContent;
        const priority = ticket.querySelector(".priority").textContent;

        document.getElementById("title").value = title;
        document.getElementById("description").value = description;
        document.getElementById("priority").value = priority;

        document.querySelector('button[type="submit"]').textContent = "Update Ticket";

        editingTicket = ticket;
    });
});

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
    
    if (editingTicket) {

    editingTicket.querySelector("strong").textContent = title;
    editingTicket.querySelector("p").textContent = description;

    const prioritySpan = editingTicket.querySelector(".priority");
    prioritySpan.textContent = priority;
    prioritySpan.className = `priority ${priority.toLowerCase()}`;

    editingTicket = null;

    document.querySelector('button[type="submit"]').textContent = "Create Ticket";

    form.reset();

    return;
}
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
