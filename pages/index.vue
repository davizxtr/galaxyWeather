<template>

    <!-- Buscador -->
    <InputSearch v-model="city"/>
    
    <!-- Cacheo de ciudades -->
    <ListSearch 
    :list="searchList"
    v-model="city"/>

    <!-- Weather -->
    <Spinner v-if="loading"/>

    <div v-else-if="error">
        {{ error }}
    </div>

    <Weather v-else-if="weather" :data="weather"/>
    
    <div v-else class="alert-init">
        <img src="/img/undraw_weather_app_re_kcb1.svg" />
        <p>Introduce una ciudad para ver el tiempo</p>
    </div>
   
</template>

<script setup>
import { watch, ref } from 'vue'
import InputSearch from '~/components/Inputs/InputSearch.vue'
import ListSearch from '~/components/List/ListSearch.vue'
import Weather from '~/components/Weather.vue'
import Spinner from '~/components/Spinner.vue'
import { useWeather } from '~/composables/useWeather'
import { useCache } from '~/composables/useCache'

let loading = ref(false)
let error = ref(null)

let city = ref('')
let weather = ref(null)
let searchList = ref([])

watch(city, () => fetchWeather())

const fetchWeather = async () => {

    try {

        error.value = null

        loading.value = true

        const data = await useWeather(city.value)
        
        if (!data.value) {
            throw new Error("No se pudo obtener la información meteorológica.");
        }

        const weatherInfo = {
            location: data.value.name,
            description: data.value.weather[0].description,
            temperature: data.value.main.temp,
            tempMax: data.value.main.temp_max,
            tempMin: data.value.main.temp_min,
            pressure: data.value.main.pressure,
            humidity: data.value.main.humidity,
            visibility: data.value.visibility / 1000,
            wind: {
                speed: data.value.wind.speed,
                deg: data.value.wind.deg
            },
            iconUrl: `http://openweathermap.org/img/wn/${data.value.weather[0].icon}@2x.png`
        }

        weather.value = weatherInfo

        searchList.value = useCache(city.value)

    } catch (e) {

        error.value = e

    } finally {

        loading.value = false
    }
}

onMounted(() => {
    searchList.value = JSON.parse(localStorage.getItem('search'))
})
</script>

<style lang="scss" scoped>
.alert-init {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 50px 0px;
    img {
        width: 200px;
    }
    p {
        font-size: 1.2rem;
        max-width: 200px;
        text-align: center;
        color: gray;
    }
}
</style>