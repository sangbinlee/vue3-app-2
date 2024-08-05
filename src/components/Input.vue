<template>
    <div class="form-group">
        <label>{{ label }}</label>
        <input :value="subject" @input="onInput" type="text" class="form-control">
        <div v-if="error" class="text-red">
            {{ error }}
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['useContext', 'submit'])

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    error: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    }
})
const onInput = (e) => {
    emit('update:subject', e.target.value);
}; 
</script>

<style scoped>
.text-red {
    color: red;
}
</style>