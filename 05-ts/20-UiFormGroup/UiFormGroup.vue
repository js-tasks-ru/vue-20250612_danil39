<script setup lang="ts">
import { computed, useSlots, type VNode } from 'vue';

const props = defineProps<{
  for?: string,
  label?: string, 
  description?: string,
  hint?: string,
  showHint?: boolean,
  invalid?: boolean
}>()

defineSlots<{
  label?: () => VNode[],
  description?: () => VNode[],
  default: () => VNode[],
}>()

const slots = useSlots()

const showHint = computed(() => 
  props.hint !== undefined && (props.showHint || props.invalid)
)
</script>

<template>
  <div class="form-group">
    <div class="form-group__label-wrapper" v-if="props.label || slots.label || props.description || slots.description">
      <label class="form-group__label" v-if="props.label || slots.label" :for="props.for">
        <slot name="label">{{ props.label }}</slot>
      </label>
      <div class="form-group__description" v-if="props.description || slots.description">
        <slot name="description">{{ props.description }}</slot>
      </div>
    </div>

    <div class="form-group__control">
      <slot />
    </div>
    
    <div class="form-group__hint" v-if="props.hint" :class="{'form-group__hint--invalid': props.invalid}">
      <span v-if="showHint">{{ props.hint }}</span>
    </div>
  </div>
</template>

<style scoped>
/* _form-group.css */
.form-group {
}

.form-group__label-wrapper {
  margin-block-end: var(--spacing-small);
}

.form-group__label {
  display: block;
  font-size: var(--font-size-control);
}

.form-group__description {
  color: var(--color-dimmed);
}

.form-group__hint {
  font-size: var(--font-size-small);
  color: var(--color-dimmed);
  min-height: 1lh;

  &.form-group__hint--invalid {
    color: var(--color-danger);
  }
}
</style>
