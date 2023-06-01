export const getRealTimeWeather = async (city: string = 'Cluj', noOfDays: number = 3) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=N/A&q=${city}&aqi=no`;
  const options = {
    method: 'GET',
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();

    return result;
  } catch (error) {
    console.error(error);
  }
};
