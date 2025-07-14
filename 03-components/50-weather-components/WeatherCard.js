import { defineComponent } from "vue";
import WeatherCardAlert from "./WeatherCardAlert";
import WeatherCardBriefInformation from "./WeatherCardBriefInformation";
import WeatherCardConditions from "./WeatherCardConditions";
import WeatherCardDetails from "./WeatherCardDetails";

export default defineComponent({
    name: "WeatherCard",

    components: {
        WeatherCardAlert,
        WeatherCardBriefInformation,
        WeatherCardConditions,
        WeatherCardDetails,
    },

    props: {
        weatherInfo: {
            type: Array,
        },
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
        <li class="weather-card" :class="{ 'weather-card--night':isNightTime(
            weatherInfo.current.sunrise, 
            weatherInfo.current.dt, 
            weatherInfo.current.sunset
        ) }">
            <WeatherCardAlert :alertInfo="weatherInfo.alert"/>
            <WeatherCardBriefInformation :name="weatherInfo.geographic_name" :time="weatherInfo.current.dt"/>
            <WeatherCardConditions :iconId="weatherInfo.current.weather.id" :temperature="weatherInfo.current.temp" :title="weatherInfo.current.weather.description"/>
            <WeatherCardDetails :pressure="weatherInfo.current.pressure" :humidity="weatherInfo.current.humidity" :clouds="weatherInfo.current.clouds" :windSpeed="weatherInfo.current.wind_speed"/>
        </li>
    `
})