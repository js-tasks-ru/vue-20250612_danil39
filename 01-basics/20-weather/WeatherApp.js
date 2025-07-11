import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',

  setup() {

    return {
      weatherData: getWeatherData(),
      weatherConditionIcons: WeatherConditionIcons,
      zeroCelsiusInKelvin: 273.15,
      mmHgInhPa: 0.75,
    }
  },

  methods: {
    parseTime(timeStr) {
      const [hours, minutes] = timeStr.split(":").map(Number);
      const now = new Date();
      now.setHours(hours, minutes, 0, 0);
      return now;
    },
    isNightTime(startStr, checkStr, endStr) {
      const startTime = this.parseTime(startStr);
      const checkTime = this.parseTime(checkStr);
      const endTime = this.parseTime(endStr);

      return !((startTime <= checkTime) && (checkTime <= endTime));
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list" v-for="weatherCity in weatherData">
        <li class="weather-card" :class="{ 'weather-card--night':isNightTime(
          weatherCity.current.sunrise, 
          weatherCity.current.dt, 
          weatherCity.current.sunset
        ) }">
          <div class="weather-alert" v-if="weatherCity.alert != null">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{ weatherCity.alert.sender_name }} {{ weatherCity.alert.description }}</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{ weatherCity.geographic_name }}
            </h2>
            <div class="weather-card__time">
              {{ weatherCity.current.dt }}
            </div>
          </div>
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="weatherCity.current.weather.description">{{ weatherConditionIcons[weatherCity.current.weather.id] }}</div>
            <div class="weather-conditions__temp">{{ (weatherCity.current.temp - zeroCelsiusInKelvin).toFixed(1) }} °C</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{ (weatherCity.current.pressure * mmHgInhPa).toFixed(0) }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{ weatherCity.current.humidity }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{ weatherCity.current.clouds }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{ weatherCity.current.wind_speed }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
})
