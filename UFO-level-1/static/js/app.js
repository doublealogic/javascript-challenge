// Gathering data from data.js
let tableData = data;

// Gathers Table References
let t_body = d3.select("tbody");

function fillTable(data) {
    t_body.html("");

    data.forEach((data_row) => {
        let row = t_body.append("tr");

        Object.values(data_row).forEach((value) => {
            let t_d = row.append("td");
                t_d.text(value);
        }
        );
    });
}

function filterOnClick() {

    // Gets datetime value from the filter 
    let date = d3.select("#datetime").property("value");
    let data_Filtered = tableData;

    if (date) {
        data_Filtered = data_Filtered.filter(row => row.datetime === date);
    }

    fillTable(data_Filtered);
}

d3.selectAll("#filter-btn").on("click", filterOnClick);

// Fills out the table when you load the page
fillTable(tableData);