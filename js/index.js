/* Bool variables */
var isDarkModeEnabled = false; // Dark mode variable
var isToggleEnabled = false; // Toggle on/off variable
var isModalOpen = false; // Modal open/close variable

/* HTML Elements */
var toggle;
var modal;
var body;

/* Global chart */
var chart;

/* On page ready */
document.addEventListener("DOMContentLoaded", function() {
    // Get and set HTML Elements to the global variables
    body = document.querySelector("body");
    modal = document.querySelector(".modal-wrapper");
    toggle = document.querySelector(".toggle");

    // Detect if dark mode was enabled before
    var darkMode = localStorage.getItem("isDarkModeEnabled") != undefined ? true : false;
    if (darkMode) {
        // Enable dark mode on ready
        toggleDarkMode();
    } else {
        // Load chart
        initializeChart();
    }

    if (isDarkModeEnabled && darkMode) {
        // Enable dark mode on ready if was setted to true by default
        setDarkMode();
    }

    // Detect when toggle was clicked
    toggle.addEventListener("click", toggleDarkMode);
});

/* Turn on dark mode */
function setDarkMode() {
    // Turn on toggle and add "dark" class to body
    toggle.classList.add("active");
    body.classList.add("dark");

    // Save dark mode variable
    localStorage.setItem("isDarkModeEnabled", "true");

    isDarkModeEnabled = true;
    isToggleEnabled = true;
}

/* On or off toggle + Change between dark and light mode */
function toggleDarkMode() {
    // If dark mode is already enabled, remove the class and turn off the toggle
    if (isToggleEnabled) {
        toggle.classList.remove("active");
        body.classList.remove("dark");

        // Delete local storage variable
        localStorage.removeItem("isDarkModeEnabled");

        isDarkModeEnabled = false;
    } else {
        // If dark mode is disabled, add the class and turn on the toggle
        toggle.classList.add("active");
        body.classList.add("dark");

        // Save dark mode variable
        localStorage.setItem("isDarkModeEnabled", "true");

        isDarkModeEnabled = true;
    }

    // If chart exists, destroy it
    if (chart != null & chart != undefined) {
        chart.destroy();
    }

    // Assign global variable
    isToggleEnabled = !isToggleEnabled;

    // Call the chart again to change between light/dark styles
    initializeChart();
}

/* Open or close modal */
function toggleModal() {
    // If modal is already open, remove the class to hide it
    if (isModalOpen) {
        modal.classList.remove("open");
    } else {
        // If modal is closed, add the class to show it
        modal.classList.add("open");
    }

    // Assign global variable
    isModalOpen = !isModalOpen;
}

/* Initialize chart with example data and custom styles */
function initializeChart() {
    // Define colors
    var light_blue_color = 'hsl(220, 19%, 66%)';
    var blue_color = 'hsl(243, 51%, 70%)';
    var white_color = 'hsl(0, 0%, 100%)';
    var gray_color = 'hsl(230, 9%, 40%)';
    var light_gray_color = 'hsl(330, 3%, 85%)';

    // If dark mode is enabled, change the colors to neutral
    if (isToggleEnabled) {
        white_color = 'hsl(230, 17%, 14%)';
        light_gray_color = 'hsl(225, 6%, 37%)';
    }

    // Get HTML Element
    const ctx = document.getElementById('followersChart');

    // Chart font
    Chart.defaults.font.family = 'Inter'; // Set family same as site
    Chart.defaults.font.size = 10; // Set size to 10px
    Chart.defaults.color = light_blue_color; // Set font color

    // Start chart
    chart = new Chart(ctx, {
        type: 'line', // Line chart
        // Example data
        data: {
            labels: ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
            datasets: [{
                label: 'new followers',
                data: [3, 2, 6, 8, 9, 10, 9, 10, 12, 12],
                borderWidth: 1,
                pointHoverBackgroundColor: blue_color
            }],
        },
        // Options
        options: {
            maintainAspectRatio: false, // Adapt to parent content
            elements: {
                // Customize lines
                line: {
                    tension: 0.5,
                    backgroundColor: blue_color,
                    borderColor: blue_color
                },
                // Customize points
                point: {
                    borderColor: blue_color,
                    backgroundColor: white_color,
                    pointRadius: 5,
                    borderWidth: 1,
                    hoverBorderWidth: 1,
                    hoverRadius: 5
                }
            },
            plugins: {
                // Hide legend
                legend: {
                    display: false
                },
                // Customize tooltip
                tooltip: {
                    backgroundColor: white_color,
                    borderColor: gray_color,
                    borderWidth: 1,
                    displayColors: false,
                    caretSize: 0,
                    cornerRadius: 0,
                    titleColor: blue_color,
                    bodyColor: blue_color,
                    callbacks: {
                        // Hide tooltip title
                        title: function() {
                            return '';
                        },
                        // Customize tooltip label
                        label: function(context) {
                            let label = context.dataset.label || '';
    
                            if (label) {
                                label;
                            }
                            if (context.formattedValue !== null) {
                                label = context.formattedValue + " " + label;
                            }
                            return label;
                        }
                    }
                }
            },
            // Customize grid lines
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        borderColor: light_blue_color,
                        color: function() {
                            return light_gray_color;
                        },
                        borderDash: [5, 5]
                    }
                },
                x: {
                    grid: {
                        borderColor: light_blue_color,
                        color: function() {
                            return light_gray_color;
                        },
                        borderDash: [5, 5]
                    }
                }
            }
        }
    });
}