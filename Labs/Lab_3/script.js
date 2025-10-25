
function color(clicked)
{
    clicked.style.backgroundColor="rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
}

function create()
{
    const newElement = document.createElement("p");
    newElement.textContent = "Im so happy I exist now :)";
    newElement.setAttribute("id","newp")
    document.body.appendChild(newElement);
    const newButton = document.createElement("button")
    newButton.textContent = "Kill the child";
    newButton.setAttribute("id", "newb")
    newButton.setAttribute("onclick","kill()")
    document.body.appendChild(newButton);
}

function kill()
{
    document.body.removeChild(document.getElementById("newp"));
    document.body.removeChild(document.getElementById("newb"))
}

function tablesort() {
    const table = document.querySelector("table");
    const rows = Array.from(table.rows).slice(1); // skip header
    const tbody = table.tBodies[0];
    
    // Pick which column to sort by (1 = second column)
    const col = 1;

    // Sort numerically (change parseFloat to String compare if you want text)
    const sorted = rows.sort((a, b) => {
        const A = parseFloat(a.cells[col].innerText);
        const B = parseFloat(b.cells[col].innerText);
        return A - B;
    });

    // Reattach in sorted order
    sorted.forEach(row => tbody.appendChild(row));
}