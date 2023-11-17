
document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById("wavyLines").getContext("2d");

    var data = {
    labels: ["30.05", "31.05", "01.06", "02.06", "03.06", "04.06", "05.06", "07.06", "08.06", "09.06"],
    datasets: [
        {
        label: "Волна 1",
        data: [12, 25, 40, 55, 42, 30, 18, 50, 38, 20],
        backgroundColor: "rgba(233, 68, 141, 0.8)",
        borderColor: "rgba(233, 68, 141, 1)",
        borderWidth: 1,
        fill: true,
        tension: 0.4
        },
        {
        label: "Волна 2",
        data: [30, 45, 20, 35, 50, 40, 28, 15, 32, 48],
        backgroundColor: "rgba(215, 169, 223, 0.9)",
        borderColor: "rgba(215, 169, 223, 1)",
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


document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById("DailyProgress").getContext("2d");

    var data = {
    labels: ["30.05", "31.05", "01.06", "02.06", "03.06", "04.06", "05.06"],
    datasets: [
        {
        label: "Значения",
        data: [45, 60, 35, 50, 65, 40, 55],
        backgroundColor: createGradient(ctx, "#7f59c2", "#FF00FF"),
        borderWidth: 0,
        type: "bar"
        }
    ]
    };

    var options = {
    scales: {
        y: {
        beginAtZero: true,
        max: 70
        }
    }
    };

    var barChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options
    });
});

function createGradient(ctx, color1, color2) {
    var gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, color1);
    return gradient;
}