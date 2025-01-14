# The Countries Application

This [React](https://react.dev/) + [Vite](https://vite.dev/) app was built up as the solution to exercises [2.18, 2.19 and 2.20](https://fullstackopen.com/en/part2/adding_styles_to_react_app#exercises-2-18-2-20) of the [Full Stack Open](https://fullstackopen.com/en/) MOOC from the University of Helsinki.


## Running the application

As part of the summary view of a country, the app displays current weather conditions in the capital city. This weather data is obtained from [OpenWeather](https://openweathermap.org/) and requires a [One Call API 3.0](https://openweathermap.org/api/one-call-3) key. The key is accessed within the app as a Vite [env variable](https://vite.dev/guide/env-and-mode.html), so the app must be started as follows:

```sh
# Assuming the API key is abc123

# Linux/Unix/macOS:
export VITE_OPENWEATHER_KEY=abc123 && npm run dev

# Windows cmd.exe:
set "VITE_OPENWEATHER_KEY=abc123" && npm run dev 

# Windows PowerShell
($env:VITE_OPENWEATHER_KEY="abc123") -and (npm run dev)
```
