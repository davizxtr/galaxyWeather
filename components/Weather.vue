<template>

    <section class="weather">

        <div class="weather-title">
            <b>El tiempo en </b>
            <h1>{{ data.location }}</h1>
        </div>

        <div class="weather-temp">
            <img :src="data.iconUrl" :alt="data.description" />

            <div>
                <p>{{ data.temperature }}°C</p>
                <div class="weather-temp-list">
                    <div><span>↓</span>{{ data.tempMin }}<span>°C</span></div>
                    <div><span>↑</span>{{ data.tempMin }}<span>°C</span></div>
                </div>
            </div>
        </div>

        <ul class="weather-list">
            <li><b>Estado</b> {{ data.description }}</li>
            <li><b>Presión</b> {{ data.pressure }} hPa</li>
            <li><b>Humedad</b> {{ data.humidity }} %</li>
            <li><b>Visibilidad</b> {{ data.visibility }} Km</li>
            <li><b>Viento</b> {{ data.wind.speed }} m/s, dirección {{ data.wind.deg }}°</li>
        </ul>
    </section>
    
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})

</script>

<style lang="scss" scoped>
section.weather {
    margin: 0 25px;
    .weather-title {
        h1 {
            margin: 10px 0;
            font-size: 3rem;
        }
    }
    .weather-temp {
        display: flex;
        align-items: center;
        background-color: white;
        border-radius: 8px;
        border: 1px solid #ebebeb;
        img {
            border-right: 1px solid #ebebeb;
            margin-right: 20px;
        }
        > div {
            display: flex;
            flex-flow: column;
            > p {
                font-size: 3rem;
                margin: 0;
            }
            .weather-temp-list {
                display: flex;
                justify-content: space-between;
                > div {
                    font-size: 1.3rem;
                    > span {
                        font-size: 0.9rem;
                    }
                }
            }
        }
        
    }

    ul.weather-list {
        list-style: none;
        margin: 20px 0;
        padding: 0;
        li {
            background-color: white;
            padding: 10px;
            margin-bottom: 5px;
            border: 1px solid #ebebeb;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;  
        }
    }
}
</style>