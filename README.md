<a name="readme-top"></a>
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">⚗️
  </a>
  <h1 align="center">Novo data</h1>
  <p align="center">
    The project helps to visualise data from different sensors.  
</div>

## About The Project

This project created as a part of the assignment, where it's been requested to create SPA application that visualises data from different sensors. Data comes in a JSON file, which is stored locally and consists of batches and sensors. Every sensor is supplied with values, timestamps, unit and description properties.

Novo data consists of 2 views - View and Dashboard. Views can be selected at the top using the navigation bar.

**View** allows to select and visualise data from sensor, apply interval filter and compare one dataset with another different set that uses the same unit of measure. Visualisation is done using a line chart. Also, there is fade-out-in animation on the page load.

**Dashboard** view presents aggregated information based on data from JSON file. It uses widgets to represent data. Data is dynamic and meant to show correlations or differences between samples. This V1 includes an overview, lowest and highest measures, and a pie chart with the total samples collected. As an idea represented, numbers could navigate to more detailed reports.

The application is fully responsive, although it is intended to be used on big screens and tablets. Visual design is accessible and includes a dark theme. Navigation is designed with the idea that the application can be used with just one finger.

### Built With

* Vite
* Vanilla JavaScript
* Vue3 with Composition API and script setup
* Tailwindcss, DaisyUI
* PostCSS with autoprefixer
* Chart.js
* Eslint
* Cypress E2E

## Process

The project started with research and the creation of project specifications. These specifications are - SPA, semantic and responsible, simple and intuitive, documented, modular, scalable, deployable and testable.

[Process (figma).](https://www.figma.com/file/SAWLCepAJyVulnfaPdVVzx/Novo-Data?node-id=0%3A1)

Primary inspiration came from PowerBI and Youtube application for TV.

![Tux, the Linux mascot](/public/process/app-structure-v1-512.png)

## Getting Started

### Prerequisites

Machine with latest Node and npm on board, plus connection to GitHub via SSH.

### Installation

Clone repository.

 ```
git clone git@github.com:nicksowl/novo_data.git
```
CD into the project folder.
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

Bundle project for production. You can find compiled files in the 'dist' folder.
```
npm build
```
Preview build.
```
npm run preview
```

## Future development and improvements

It is divided into versions based on necessity and categories.

V1.5
- Optimisation
  - Performance optimisation and code refactoring.
    - Working and mapping batches and sensors smarter.
  - Architecture for scalability.
  - Improved logic behind double data sources view. Take into consideration different timestamps.
  - In the dashboard vie, the pie visualisation of the total collected samples for each sensor has proper logic.
- Integration of tests. E2E, Vue components, JavaScript functions.
- Integration with backend system and implementation of Axios or fetch for async JSON fetching.
- Proper error messages for the user edge cases.
- Move helper functions to external folder.

V2
- Implementation of TypeScript.
- Visual design system, with same style components. Configured global styles with tailwind config. Use of the newest Vuetify as a component library?
- Future development and improvement of visualisation graphs, designing as separate components.
- In view, when clicking on batch or sensors, input resets.

V3
- Implementation of state manager, like Pinia or Vuex, for data handling.
- Diagram export feature. 
- Use browser local storage for a personalised view in the dashboard based on searches.
- In the dashboard, click on numbers/data redirects to the relevant detailed report.
- Animation between views.

V4
- User widgets builder.
- Personalised widgets based on application use.
- Live data.