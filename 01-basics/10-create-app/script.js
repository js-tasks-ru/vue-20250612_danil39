import { defineComponent, createApp } from 'vue'

const Comp = defineComponent({
    setup() {
        const today = new Date();

        function formatAsLocalDate(date) {
            return new Date(date).toLocaleDateString('ru-RU', {
                dateStyle: 'long'
            });
        }

        return {
            formatAsLocalDate: formatAsLocalDate(today)
        }
    },

    template: '<div>Сегодня {{ formatAsLocalDate }}</div>'
});

const app = createApp(Comp);
const vm = app.mount('#app');
