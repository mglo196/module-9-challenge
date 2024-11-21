# module-9-challenge
# 08 Typescript Challenge: Vehicle Builder

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

This Challenge prompts the user to either create a new vehicle or select an existing vehicle. After going through the creation or selection process, the user is able to perform certain actions with the selected vehicle. The user is returned to the actions menu after each action until they decide to exit the application.


## Installation 

Clone the repository:

    git clone https://github.com/mglo196/module-8-challenge

Navigate to the project folder:

    cd module-8-challenge

Install the dependencies:

    npm install

## Usage

Download the [Inquirer package](https://www.npmjs.com/package/inquirer). 

The application will be installed by using the following command:

```bash
npm start
```

Then follow the prompts to select one of the three vehicles and perform actions on it.


## User Story

```md
AS a developer
I WANT to update an existing application to include additional vehicle types
SO THAT I am able to comprehend and work with existing code bases.
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted to create a new vehicle or existing vehicle
THEN I can choose between the two options
WHEN I am prompted to choose the vehicle type during creation
THEN I can choose between car, truck, and motorbike
WHEN I am prompted for details about the vehicle
THEN I can enter the vehicle information
WHEN I have entered all the vehicle information
THEN I can use the created vehicle
WHEN I select an existing vehicle
THEN I can use the selected existing vehicle
WHEN I have created a new vehicle or selected an existing vehicle
THEN I can perform actions with that vehicle
WHEN I perform an action with a vehicle
THEN I see the result of the action in the command-line
WHEN I complete the process of performing an action
THEN I can perform additional actions until I choose to exit
```

## The Deployment

[The Repo](https://github.com/mglo196/module-8-challenge)

[The Walkthrough Video](https://drive.google.com/file/d/1pnlYuCdxJoeBgpcRL02vIUTruO-LLBlk/view)

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