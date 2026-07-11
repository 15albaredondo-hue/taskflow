// ==========================
// GRÁFICO DE TAREAS
// ==========================

let tasksChart;
Chart.register(ChartDataLabels);


function updateChart() {

    const tasks = getTasks();

    const pending = tasks.filter(task =>
        task.status === "TO_DO"
    ).length;

    const progress = tasks.filter(task =>
        task.status === "IN_PROGRESS"
    ).length;

    const completed = tasks.filter(task =>
        task.status === "DONE"
    ).length;

    const ctx = document
        .querySelector("#tasksChart")
        .getContext("2d");

    if (tasksChart) {

        tasksChart.destroy();

    }

    tasksChart = new Chart(ctx, {

        type: "doughnut",

        data: {

            labels: [

                "Pendientes",
                "En progreso",
                "Completadas"

            ],

            datasets: [{

                data: [

                    pending,
                    progress,
                    completed

                ],

                backgroundColor: [

                    "#facc15",
                    "#3b82f6",
                    "#22c55e"

                ]



            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    position: "bottom"

                },

                datalabels: {

                    color: "#ffffff",

                    font: {

                        weight: "bold",

                        size: 14

                    },

                    formatter: (value, context) => {

                        const data = context.chart.data.datasets[0].data;

                        const total = data.reduce(
                            (sum, value) => sum + value,
                            0
                        );

                        if (total === 0) return "0%";

                        return Math.round(
                            (value / total) * 100
                        ) + "%";

                    }

                }

            }

        }

    });

}