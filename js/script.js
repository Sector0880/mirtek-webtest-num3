
document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById("wavyLines").getContext("2d");

    var data = {
    labels: ["30.05", "31.05", "01.06", "02.06", "03.06", "04.06", "05.06", "07.06", "08.06", "09.06"],
    datasets: [
        {
        label: "Волна 1",
        data: [12, 25, 40, 55, 42, 30, 18, 50, 38, 20],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        fill: true,
        tension: 0.4
        },
        {
        label: "Волна 2",
        data: [30, 45, 20, 35, 50, 40, 28, 15, 32, 48],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        fill: true,
        tension: 0.4
        }
    ]
    };

    var options = {
    scales: {
        y: {
        beginAtZero: true,
        max: 60
        }
    }
    };

    var waveChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options
    });
});