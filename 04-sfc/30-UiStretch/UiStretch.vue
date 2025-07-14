<script setup></script>

<template>
  <div class="stretch-container">
    <slot />
  </div>
</template>

<style scoped>
.stretch-container > * {
  width: 100%;
  height: 100%;
}

.stretch-container > ::v-deep(img),
.stretch-container > ::v-deep(video),
.stretch-container > ::v-deep(picture) {
  object-fit: scale-down;
}
</style>
