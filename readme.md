# Social Media Dashboard
###### Static panel showing social media stadistics, include switchable Dark Mode and a modal with more information, also the dark mode state is saved on the local storage so it can be auto activated whenever the page reload or closes and open it again.

## Technologies
- HTML
- CSS
- JavaScript

## Fonts
- Family: [Inter](https://fonts.google.com/specimen/Inter)
- Weights: 400, 700

## Libraries
- [Chart.js](https://www.chartjs.org/)

## How to run
Download files and open the `index.html` on your browser

## Responsive breakpoints

- Desktop > 1024px (max width for content: 1440px)
- Tablet < 1024px
- Mobile < 768px

## Customization

To change the colors, change the variables on the `styles.css` file, also keep in mind to set the colors for the chart on the `index.js` file:
```
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
```

To set **dark mode** ON by default just change the `isDarkModeEnabled` variable to `true` on the `index.js` file:
```
var isDarkModeEnabled = false; // Dark mode variable
```

To change the chart styles look for the [Chart.js documentation](https://www.chartjs.org/docs/latest/configuration/) and change it on the `index.js` file

```
// Start chart
chart = new Chart(ctx, {
    type: ...
    data: {
        ...
    },
    options: {
        ...
    }
});
```