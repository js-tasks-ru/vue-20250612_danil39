import { defineComponent } from "vue";

export default defineComponent({
    name: "WeatherCardBriefInformation",

    props: {
        name: {
            type: String,
        },
        time: {
            type: String,
        },
    },

    template: `
        <div>
            <h2 class="weather-card__name">
                {{ name }}
            </h2>
            <div class="weather-card__time">
                {{ time }}
            </div>
        </div>
    `
})