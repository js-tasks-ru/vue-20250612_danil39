import { defineComponent } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: Infinity,
    }
  },

  setup(props, { emit }) {
    // Рекомендуется для практики реализовать обработку событий внутри setup, а не непосредственно в шаблоне

    const isMin = () => {
      return props.count <= props.min;
    }
    const isMax = () => {
      return props.count >= props.max;
    }

    const minus = () => {
      emit('update:count', props.count - 1);
    }
    const plus = () => {
      emit('update:count', props.count + 1);
    } 

    return {
      isMin,
      isMax,
      minus,
      plus,
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" :disabled="isMin()" @click="minus">➖</UiButton>
      <span class="count" data-testid="count">{{count}}</span>
      <UiButton aria-label="Increment" :disabled="isMax()" @click="plus">➕</UiButton>
    </div>
  `,
})
