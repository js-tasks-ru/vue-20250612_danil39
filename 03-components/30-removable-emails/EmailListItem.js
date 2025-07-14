import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmailListItem',

  props: {
    email: {
      type: String,
      required: true,
    },

    marked: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['stop'],

  setup(_, { emit }) {
    const onStop = () => {
      emit('stop');
    }

    return {
      onStop,
    }
  },

  template: `
    <li :class="{ marked }">
      {{ email }}
      <button type="button" aria-label="Удалить" @click="onStop">❌</button>
    </li>
  `,
})
