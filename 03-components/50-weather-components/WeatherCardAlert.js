import { defineComponent } from "vue";

export default defineComponent({
    name: "WeatherCardAlert",

    props: {
        alertInfo: {
            type: Array,
        }
    },

    template: `
        <div class="weather-alert" v-if="alertInfo != null">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{ alertInfo.sender_name }} {{ alertInfo.description }}</span>
        </div>
    `
})