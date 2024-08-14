<template>
    <ul>
        <li 
        v-for="(city, c) in list" 
        :key="c"
        @click="selectCity(city)">
            {{ city }}
        </li>
    </ul>
</template>

<script setup>
import { defineProps, ref, defineEmits } from 'vue'

const props = defineProps({
    list: {
        type: Array,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])

const citySelected = ref(null)
const selectCity = (city) => {

    citySelected.value = city
    emit('update:modelValue', citySelected.value)
    
}

</script>

<style lang="scss" scoped>
ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin: 20px;
    li {
        padding: 10px 22px;
        border: 1px solid #d6d6d6;
        border-radius: 30px;
        font-weight: 400;
        text-transform: capitalize;
        background-color: white;
        cursor: pointer;
    }
}
</style>