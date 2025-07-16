import { defineComponent } from "vue";
import { WeatherConditionIcons } from "./weather.service";

export default defineComponent({
    name: "WeatherCardConditions",

    props: {
        temperature: {
            type: Number,
        },
        iconId: {
            type: Number,
        },
        title: {
            type: String,
        }
    },

    setup() {
        return {
            zeroCelsiusInKelvin: 273.15,
            weatherConditionIcons: WeatherConditionIcons,
        }
    },

    template: `
    <div class="weather-conditions">
        <div class="weather-conditions__icon" :title="title">{{ weatherConditionIcons[iconId] }}</div>
        <div class="weather-conditions__temp">{{ (temperature - zeroCelsiusInKelvin).toFixed(1) }} °C</div>
    </div>
    `
})