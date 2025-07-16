import { defineComponent } from "vue";

export default defineComponent({
    name: "WeatherCardDeteails",

    props: ["pressure", "humidity", "clouds", "windSpeed"],

    setup() {
        return {
            mmHgInhPa: 0.75,
        }
    },

    template: `
    <div class="weather-details">
        <div class="weather-details__item">
            <div class="weather-details__item-label">Давление, мм рт. ст.</div>
            <div class="weather-details__item-value">{{ (pressure * mmHgInhPa).toFixed(0) }}</div>
        </div>
        <div class="weather-details__item">
            <div class="weather-details__item-label">Влажность, %</div>
            <div class="weather-details__item-value">{{ humidity }}</div>
        </div>
        <div class="weather-details__item">
            <div class="weather-details__item-label">Облачность, %</div>
            <div class="weather-details__item-value">{{ clouds }}</div>
        </div>
        <div class="weather-details__item">
            <div class="weather-details__item-label">Ветер, м/с</div>
            <div class="weather-details__item-value">{{ windSpeed }}</div>
        </div>
    </div>
    `
})