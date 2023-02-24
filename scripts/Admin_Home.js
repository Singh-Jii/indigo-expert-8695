
let baseURL = "https://fashionhub-mrc2.onrender.com";
let product = 0;
let users = 0;
let order = 0;

fetchData("AllProducts")
fetchData("users")
fetchData("Orders")
setTimeout(() => {
    console.log(product)
    showGraph()
}, 2000)

function fetchData(Query) {
   
    fetch(`${baseURL}/${Query}`)
        .then((Response) => {
            return Response.json()
        })
        .then((data) => {
            console.log(data);
            Query == "AllProducts" ? product = data.length :Query == "users" ? users = data.length :order = data.length ;
            
        })

}






function showGraph() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Contry', 'Mhl'],
            ['Products',product ],
            ['Users',users ],
            ['Orders',order ]
        ]);

        var options = {
            title: 'Company Growth Chart',
           // is3D: true
        };

        var chart = new google.visualization.BarChart(document.getElementById('myChart'));
        chart.draw(data, options);
    }
}
let logout=document.getElementById("out")
let log=document.getElementById("logout");
log.addEventListener("click",()=>{
    logout.style.display = "inline"
    setTimeout(() => {
        logout.style.display = "none";
        window.open("./index.html")
    }, 2000)
})