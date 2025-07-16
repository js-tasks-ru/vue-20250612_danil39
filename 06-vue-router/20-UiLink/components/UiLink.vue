<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  to?: string,
  href?: string,
}>()

const tag = computed(() => (props.to ? 'RouterLink' : 'a'))
</script>

<template>
  <component :is="tag" :to="props.to" :href="props.href">
    <slot />
  </component>
</template>

<style scoped>
.link {
  color: var(--color-text-primary);
}

.link:hover {
  text-decoration: underline;
}
</style>
