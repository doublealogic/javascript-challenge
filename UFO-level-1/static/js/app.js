// Gathering data from data.js
let tableData = data;

// Gathers Table References
let t_body = d3.select("tbody");

function createTable(data) {
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