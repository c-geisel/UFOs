// import the data from data.js, make variable to hold the data
const tableData = data;

// Reference the HTML table using d3, d3 is visualization library, use d3 to look for <tbody> tags in HTML
// we are telling javascript where the data will be displayed
var tbody = d3.select("tbody");