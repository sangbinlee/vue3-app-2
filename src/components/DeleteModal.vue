<template>
    <Modal>
        <template #title>
            Delete Todo
        </template>
        <template #body>
            Are you sure you want to delete this todo?
        </template>
        <template #footer>
            <button type="button" class="btn btn-secondary" @click="onClose">
                Close
            </button>
            <button type="button" class="btn btn-danger" @click="onDelete">Delete</button>
        </template>
    </Modal>
</template>
<script setup lang="ts">
import Modal from '@/components/Modal.vue';
const emit = defineEmits(['close', 'delete'])

const onClose = () => {
    emit('close');
}

const onDelete = () => {
    emit('delete');
}
</script>

<style></style>