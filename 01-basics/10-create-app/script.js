import { defineComponent, createApp } from 'vue'

const Comp = defineComponent({
    name: "Отображение даты в локализованном формате",

    setup() {
        const today = new Date();

        function formatAsLocalDate(date) {
            return new Date(date).toLocaleDateString(navigator.language, {
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
