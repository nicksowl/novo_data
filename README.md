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

This project is created as a part of the assignment, where it's been requested to create SPA application that visualises data from different production sensors. Data comes in JSON file, that is stored locally, and consists of batches and sensors. Every sensor is supplied with values, timestamps, unit and description properties.

Novo data consists of 2 views - Veiw and Dashboard. Views can be navigared in top navigation bar.
View allows to visualise particular data set, apply interval filter and compare one data set with another different dataset that uses the same unit of measure. Visualisation is done in line chart. Also there is fade-out-in animation on page load.
Dashboard view present aggrigated information from data ....


Views is a dataset picker/filter and picked data visualisation. Dashboard is a extraction view of importand data, comparison between batches. 
As an idea, data depicted on this page can lead to pages that inholds specific and detailed information.


## Process

Moodboard:
https://www.figma.com/file/SAWLCepAJyVulnfaPdVVzx/Novo-Data?node-id=0%3A1

* Inspiration from Youtube TV app and PowerBi. You can use this app with one finger. Simple and ituitive.
* Application target screen - laptop, tablet.

### Built With

* Vite
* Vanilla JavaScript
* Vue3 with Composition API and script setup.
* Tailwindcss, DaisyUI
* Chart.js
* Vitest or not 

## Getting Started

...

### Prerequisites

Machine with latest npm and Node on board, plus Github.

### Installation

Clone reposotory
 ```sh
git clone https://github.com/your_username_/Project-Name.git
```

```
cd project_folder
```
```
npm install
```
```
npm run dev
```

### Future development
- Use browser local storage for personalised view in dashboard based on searches.
- In dashboard, click on numbers/data redirects to relevant detailed report.
- In dashboard, pie visualisation of total collected samples for each sensor has proper logic.
- Future development and improvement of visualisation graphs, designing as seperate components.
- Improved logic behind double data sources view. Take into considiration different timestamps.
- Data export feature. 
- Proper error messages for use edge cases.
- Integration of testings.
- Refactoring and optimising code and data handeling.
- Implement fetching live JSON file.
- Connection with backend system.
- Visual design system, with samestyled components. Use newest Vuetify?

