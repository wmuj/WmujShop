<script setup lang="ts">
import CategoryMain from './components/CategoryMain.vue'
//接收传递过来的id
const query = defineProps<{
  id: string
}>()
</script>

<template>
  <CategoryMain :id="query.id"></CategoryMain>
</template>

<style lang="less" scoped></style>
