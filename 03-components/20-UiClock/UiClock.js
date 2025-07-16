import { ref, defineComponent, onMounted, onUnmounted, computed } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const time = ref(new Date());

    let timer = null;

    onMounted(() => {
      timer = setInterval(() => {
        time.value = new Date();
      }, 1000)
    });

    onUnmounted(() => {
      clearInterval(timer)
    });

    const formattedTime = computed(() => 
      time.value.toLocaleTimeString(navigator.language, { timeStyle: 'medium' }) 
    );

    return {
      formattedTime,
    }
  },

  template: `<div class="clock">{{ formattedTime }}</div>`,
})
