# Weather Data Fetcher

This project provides a Node.js script that fetches weather data from the Tomorrow.io API and processes the minutely weather data. It is designed to be deployed as an AWS Lambda function.

## Table of Contents

1. [Overview](#overview)
2. [API Details](#api-details)
3. [How to Use](#how-to-use)
   - [Clone the Repository](#clone-the-repository)
   - [Install Dependencies](#install-dependencies)
   - [Run the Script Locally](#run-the-script-locally)

## Overview

The script fetches weather data for a specific location and logs details including temperature and weather status. It uses the Tomorrow.io API to retrieve the data and processes each minute's weather information.

## API Details

The script interacts with the Tomorrow.io API to fetch weather data. The endpoint used is:

```sh
https://api.tomorrow.io/v4/weather/forecast
```

### Required Parameters

- `location`: The coordinates for the weather data (latitude,longitude).
- `apikey`: Your Tomorrow.io API key.

## How to Use

### Clone the Repository

```bash
git clone https://github.com/Agustin199811/weather-lambda.git

cd weather-data-fetcher
```

### Install Dependencies

Ensure you have Node.js and npm installed. Run the following command to install the required dependencies:

```sh
npm install
```

### Run the Script Locally

To run the script locally, use:

```sh
node index.js
```
