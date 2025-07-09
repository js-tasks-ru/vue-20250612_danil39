import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const count = ref(0);

    return {
      count,
    }
  },

  methods: {
    
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        v-bind:disabled="count <= 0"
        v-on:click="count--"
      >➖</button>

      <span class="count" data-testid="count">{{ count }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        v-bind:disabled="count >= 5"
        v-on:click="count++"
      >➕</button>
    </div>
  `,
})
