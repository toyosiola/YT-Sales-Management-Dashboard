const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const navLinks = document.querySelectorAll(".nav-links a");
const fulfillmentCtx = document
  .querySelector(".fulfillment-chart canvas")
  .getContext("2d");
const VisitorsCtx = document
  .querySelector(".visitors-chart canvas")
  .getContext("2d");

// open sidebar
openBtn.addEventListener("click", function () {
  sidebar.classList.add("open");
});

// close sidebar
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("open");
});

// control active nav-link
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// customer fulfillment chart
// create linear gradient for first dataset
const gradient1 = fulfillmentCtx.createLinearGradient(0, 0, 0, 200);
gradient1.addColorStop(0, "#f2c8ed");
gradient1.addColorStop(1, "#21222d");

// create linear gradient for second dataset
const gradient2 = fulfillmentCtx.createLinearGradient(0, 0, 0, 200);
gradient2.addColorStop(0, "#a9dfd8");
gradient2.addColorStop(1, "#21222d");

const fulfillmentChart = new Chart(fulfillmentCtx, {
  type: "line",
  data: {
    labels: ["1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31"],
    datasets: [
      {
        label: "This month",
        data: [40, 43, 50, 28, 32, 38, 36, 42, 40, 36, 55],
        borderColor: "#f2c8ed",
        backgroundColor: gradient1,
        fill: true,
        pointRadius: 3,
      },
      {
        label: "Last month",
        data: [72, 60, 62, 68, 55, 56, 68, 66, 52, 55, 90],
        borderColor: "#a9dfd8",
        backgroundColor: gradient2,
        fill: true,
        pointRadius: 3,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// create linear gradient for first dataset
const visitorsGradient = fulfillmentCtx.createLinearGradient(0, 0, 0, 400);
visitorsGradient.addColorStop(0, "#a9dfd8");
visitorsGradient.addColorStop(1, "#21222d");

const visitorsChart = new Chart(VisitorsCtx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "New Visitors",
        data: [60, 95, 450, 250, 350, 500, 280, 420, 380, 270, 120, 320],
        borderColor: "#a9dfd8",
        backgroundColor: visitorsGradient,
        fill: true,
        pointRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#ccc",
        },
      },
      x: {
        ticks: {
          color: "#ccc",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
