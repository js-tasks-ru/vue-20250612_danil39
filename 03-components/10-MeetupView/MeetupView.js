import { defineComponent } from 'vue'
import { UiAlert, UiContainer } from '@shgk/vue-course-ui'
import MeetupAgenda from './MeetupAgenda.js'
import MeetupDescription from './MeetupDescription.js'
import MeetupCover from './MeetupCover.js'
import MeetupInfo from './MeetupInfo.js'
import './MeetupView.css'

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo,
    MeetupCover,
  },

  // props: ["meetup"],
  props: {
    meetup: {type: Array}
  },

  template: `
    <div>

      <MeetupCover :title="meetup.title" :image="meetup.image"/>

      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h2>Описание</h2>

            <MeetupDescription :description="meetup.description"/>

            <h2>Программа</h2>
            
            <div v-if="Array.isArray(meetup.agenda) && meetup.agenda.length !== 0">
              <MeetupAgenda :agenda="meetup.agenda"/>
            </div>
            <div v-else> <!-- Или при пустой программе - сообщение "Программа пока пуста..." в UiAlert -->
              <UiAlert>Программа пока пуста...</UiAlert>
            </div>

            

          </div>
          <div class="meetup__aside">
            <!-- Краткая информация о митапе -->
            <MeetupInfo :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date"/>
            <div class="meetup__aside-buttons"></div>
          </div>
        </div>
      </UiContainer>
    </div>
  `,
})
