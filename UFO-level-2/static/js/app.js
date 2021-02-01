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

    let data_Filtered = tableData;

    Object.entries(filters).forEach(([key, value]) => {
        data_Filtered = data_Filtered.filter(row => row[key] === value);
    });

    fillTable(data_Filtered);
}

let filters = {};

function updateAllFilters() {
    let inputChanged = d3.select(this).select("input");
    let changedValue = inputChanged.property("value");
    let inputID = inputChanged.attr("id");

    if (changedValue) {
        filters[inputID] = changedValue;
    }
    else {
        delete filters[inputID];
    }

    filterOnClick();
}

d3.selectAll(".filter").on("change", updateAllFilters);

// Fills out the table when you load the page
fillTable(tableData);