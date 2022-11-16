<a name="readme-top"></a>
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">⚗️
  </a>
  <h1 align="center">Novo data</h1>
  <p align="center">
    Project helps to visualise data from different sensors.  
</div>

## About The Project

This project is created as a part of the assignment, where it's been requested to create SPA application that visualises data from different production sensors. Data comes in JSON file, which is stored locally, and consists of batches and sensors. Every sensor is supplied with values, timestamps, unit and description properties.

Novo data consists of 2 views - Veiw and Dashboard. Views can be navigated at the top navigation bar.

**View** allows to select and visualise data from sensor, apply interval filter and compare one dataset with another different set that uses the same unit of measure. Visualisation is done using line chart. Also there is fade-out-in animation on the page load.

**Dashboard** view presents aggrigated information based on data from JSON file. Data is dynamic and meant to present correlations or differences between data. In V1 it includes overview, lowest and highest measures. Pie chart with total samples collected. As an idea represented numbers could navigate to more detailed report.

Application is fully responsive, although it is inteded to be used on big screens and tablets. Visual design is accessible and includes dark theme. Navigation is designed with the idea that it can be used with just one finger.

### Built With

* Vite
* Vanilla JavaScript
* Vue3 with Composition API and script setup
* Tailwindcss, DaisyUI
* PostCSS with autoprefixer
* Chart.js
* Eslint
* Vitest (?)

## Process



Moodboard:
https://www.figma.com/file/SAWLCepAJyVulnfaPdVVzx/Novo-Data?node-id=0%3A1

* Inspiration from Youtube TV app and PowerBi. You can use this app with one finger. Simple and ituitive.
* Reuirements specifications
* components and visualisation, widgets, vue components
* css and tailwind


## Getting Started

### Prerequisites

Machine with latest Node and npm on board, plus connection to Github via SSH.

### Installation
Clone reposotorium.

 ```
git clone git@github.com:nicksowl/novo_data.git
```
CD into project folsed.
```
cd novo_data
```
Install dependencies.
```
npm install
```
Run development environment.
```
npm run dev
```

### Running production
Bundle project for production. You can find compiled files in 'dist' folder.
```
npm build
```
Preview build.
```
npm run preview
```

## Future development
- Use browser local storage for personalised view in dashboard based on searches.
- In dashboard, click on numbers/data redirects to relevant detailed report.
- In dashboard, pie visualisation of total collected samples for each sensor has proper logic.
- Future development and improvement of visualisation graphs, designing as seperate components.
- Improved logic behind double data sources view. Take into considiration different timestamps.
- Data export feature. 
- Proper error messages for use edge cases.
- Integration of testings.
- Refactoring and optimising code and data handeling.
- Implement fetching of live JSON file with axios of fetch.
- Connection with backend system.
- Visual design system, with samestyled components. Configured global styles with tailwind config. Use of newest Vuetify as component library?
- Performance optimisation.
- Architecture for scalability.
- Implementation of state manager, like Pinia or Vuex for data handeling.
- Implementation of TypeScript.

## Conclusion
...
