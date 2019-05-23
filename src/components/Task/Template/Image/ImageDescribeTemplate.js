// eslint-disable-next-line no-unused-vars
const component =
  {
    /* The template can use BoostrapVue components: https://bootstrap-vue.js.org */
    template: `
    <b-row>
      <b-col md="6">
        <h2>{{ question }}</h2>
  
        <b-button :key="index" v-for="(description, index) in descriptions" @click="answer(description)" variant="primary" class="m-3">{{ description }}</b-button>
  
        <p class="mt-2">You are working now on task: <b-badge variant="warning">{{ pybossa.task.id }}</b-badge></p>
        <p>You have completed: <b-badge variant="primary">{{ pybossa.userProgress.done }}</b-badge> tasks from</p>
        
        <b-progress :value="pybossa.userProgressInPercent" :max="100"></b-progress>
      </b-col>
      <b-col md="6">
        <b-img thumbnail fluid-grow :src="pybossa.task.info.url_b"></b-img>
      </b-col>
    </b-row>`,

    data: {
      question: 'What do you see on this picture ?',
      descriptions: [
        'A human',
        'A car',
        'An animal'
      ]
    },

    methods: {
      answer (answer) {
        console.log(answer)
        this.pybossa.saveTask(answer)
      }
    },

    mounted () {
      this.pybossa.run()
    },

    props: {
      /* Injected by the Pybossa App */
      pybossa: {
        required: true
      }
    }
  }

export default component
