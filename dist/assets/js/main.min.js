var min = 100;
var max = 300;
// and the formula is:
var random = Math.floor(Math.random() * (max - min + 1)) + min;

var ctx = $("#myChart").get(0).getContext("2d");
var data = {
    labels: ["Alegría", "Empatía", "Peperoni"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(255, 245, 88, 0.4)",
            strokeColor: "rgba(255, 245, 88, 0.3)",
            pointColor: "rgba(255, 245, 88, 0)",
            pointStrokeColor: "255, 245, 88, 0.6)",
            pointHighlightFill: "255, 245, 88, 0.4)",
            pointHighlightStroke: "255, 245, 88, 0.3)",
            data: [0, 700, 0]
        },
        {
            label: "First Snack",
            fillColor: "rgba(55, 205, 255, 0.6)",
            strokeColor: "rgba(55, 205, 255, 0.5)",
            pointColor: "rgba(55, 205, 255, 0)",
            pointStrokeColor: "rgba(55, 205, 255, .8)",
            pointHighlightFill: "rgba(55, 205, 255, 0.6)",
            pointHighlightStroke: "rgba(55, 205, 255, 0.5)",
            data: [-200, 80, -200]
        },
        {
            label: "First Snack",
            fillColor: "rgba(110, 233, 171, 0.6)",
            strokeColor: "rgba(110, 233, 171, 0.5)",
            pointColor: "rgba(110, 233, 171, 0)",
            pointStrokeColor: "rgba(110, 233, 171, .8)",
            pointHighlightFill: "rgba(110, 233, 171, 0.6)",
            pointHighlightStroke: "rgba(110, 233, 171, 0.5)",
            data: [-100, 90, -100]
        }
    ]
};

new Chart(ctx).Line(data, {
    bezierCurve: true,
    scaleShowGridLines : false,
    datasetFill : true,
		scaleShowHorizontalLines: false,
		bezierCurveTension : .05,
		scaleShowVerticalLines: false,
		scaleShowHorizontalLines: false,
		datasetStroke : false,
    animationSteps: 60,
    //  easeOutElastic, easeInCubic]
    animationEasing: "easeOutQuart",
    scaleLineWidth: 0,
    // scaleIntegersOnly: true,
    // scaleBeginAtZero: false,
    // responsive: true,
    // maintainAspectRatio: false
});




//-- 
