export const useWeather = async (city) => {
    
    const config = useAppConfig();
    const apiKey = config.openWeather.apiKey;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=es&units=metric`
  
    try {

      const { data } = await useFetch(url)
      
      return data

    } catch (error) {

      throw(error)

    }

}