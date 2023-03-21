# IP and Domain Lookup

This is a web application built with React that allows users to lookup information about an IP address and/or domain.

## Description

This project was built with React and Node. The frontend fetches data from the backend API based on user input, and displays the results in the UI. The backend API accesses the WHOIS API to gather information about the IP address or domain.

### Getting Started

To get started with the project, clone this repository and navigate to the project directory in the terminal.
`npm install`
`npm start`
then visit localhost:3000

In the terminal install all dependencies

### Docker

To run a containerized version of the app, run the following commands in the terminal

`docker build . -t gfloresl/domain_checker`

`docker run -p 49160:3000 -d gfloresl/domain_checker`

then visit localhost:49160

### Contributing

If you'd like to contribute to the project, please follow these steps:

- Fork the project.
- Create a new branch.
- Make your changes.
- Submit a pull request.
