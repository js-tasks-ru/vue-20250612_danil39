import { defineComponent } from 'vue'
import EmailListItem from './EmailListItem.js'

export default defineComponent({
  name: 'EmailList',

  components: {
    EmailListItem,
  },

  props: {
    emails: {
      type: Array,
      required: true,
    },
  },

  emits: ['remove'],

  setup(props, { emit }) {
    const onRemove = (index) => {
      emit('remove', index)
    };

    return {
      onRemove,
    }
  },

  template: `
    <ul class="emails-list unstyled-list" aria-label="Emails">
      <EmailListItem
        v-for="({ email, isMarked }, index) in emails"
        :key="email"
        :email="email"
        :marked="isMarked"
        :index="index"
        @stop="onRemove(index)"
      />
    </ul>
  `,
})
