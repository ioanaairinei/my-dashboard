export const getRealTimeWeather = async (
  city: string = "Cluj",
  noOfDays: number = 3
) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=129c4e38b14f48959fb173008232705&q=${city}&aqi=no`;
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
