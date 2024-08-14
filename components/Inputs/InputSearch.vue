<template>
    <div class="input-search">
        <input 
            type="text"
            v-model="inputValue"
            @keyup.enter="updateValue"
            placeholder="Introduce una ciudad cualquiera..."
            class="input-search" />
    </div>
</template>


<script setup>

    import { ref, defineProps, defineEmits } from 'vue'
    
    const props = defineProps({
        modelValue: {
            type: String,
            required: true
        }
    })

    const emit = defineEmits(['update:modelValue'])
    
    const inputValue = ref(props.modelValue)
    
    const updateValue = () => {
        emit('update:modelValue', inputValue.value)
    }

</script>


<style lang="scss">
.input-search {
    input {
        width: -webkit-fill-available;
        padding: 20px 22px;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 30px;
        box-sizing: border-box;
        margin: 0px 20px;
    } 
}
</style>