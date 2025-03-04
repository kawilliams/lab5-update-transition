
// SVG drawing area

var margin = {top: 40, right: 10, bottom: 60, left: 60};

var width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select("#chart-area").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left} , ${margin.top})`);


// Scales
var x = d3.scaleBand()
    .range([0, width - margin.right - margin.left])
    .paddingInner(0.05);

var y = d3.scaleLinear()
    .range([height, 0]);



// Initialize data
loadData();

// Coffee chain data -- leave this.
var data;

// Load CSV file
function loadData() {
	d3.csv("data/coffee-house-chains.csv")
        .then(csv => {

		csv.forEach(function(d){
			d.revenue = +d.revenue;
			d.stores = +d.stores;
		});

		// Store csv data in global variable
		data = csv;

    // Draw the visualization for the first time
		updateVisualization();
	})
    .catch(error => {
        console.log("Error loading the data");
    })
}

// Render visualization
function updateVisualization() {

    console.log("The dataset:", data);


}