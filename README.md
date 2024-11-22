# module-9-challenge
# 09 API Challenge: Weather Dashboard

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [User Story](#userstory)
- [Acceptance Criteria](#acceptancecriteria)
- [The Deployment](#thedeployment)
- [Contributions](#contributions)

## Description

External APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in their context, frequently consuming this data via a server.

This Challenge builds a weather dashboard application that calls the OpenWeather API and renders data in the browser.


## Installation 

Clone the repository:

    git clone https://github.com/mglo196/module-9-challenge

Navigate to the project folder:

    cd module-9-challenge

Install the dependencies:

    npm install

## Usage

The application will be installed by using the following command:

```bash
npm run build
```

Then deploy the application to Render and enter a given city.


## User Story

```md
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```md
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city, and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, a description of the weather for the icon's `alt` tag, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## The Deployment

[The Repo](https://github.com/mglo196/module-9-challenge)

[The Deployed Application](https://module-9-challenge-62j9.onrender.com/)

## Mock Up

![Generated exampleREAD.ME](https://github.com/mglo196/module-9-challenge/blob/9dc3061d4d0b4a8499016f87875cd4b96e92dbd3/Weather%20Dashboard.png) 


## Contributions

Contributing

    Please follow these steps to contribute:

        Fork the repository.

    Create a new branch for your feature or bug fix:

        git checkout -b feature/YourFeatureName

    Commit your changes:

        git commit -am 'Add some feature'

    Push to the branch:

        git push origin feature/YourFeatureName

    Submit a pull request detailing your changes.

---
