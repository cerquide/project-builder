import OnlineCsvImporter from '@/components/Project/Menu/TaskMenu/Importer/OnlineCsvImporter'
import Vuex from 'vuex'
import router from '@/router'
import store from '@/store'
import sinon from 'sinon'
import BootstrapVue from 'bootstrap-vue'
import { createLocalVue, mount } from '@vue/test-utils'

const localVue = createLocalVue()

describe('Project/Menu/TaskMenu/Importer/OnlineCsvImporter.vue', () => {

  let sandbox
  localVue.use(Vuex)
  localVue.use(BootstrapVue)

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  it('should display the card', () => {

    const wrapper = mount(OnlineCsvImporter, {
      store,
      localVue,
      router,
      props: {
        id: 1 // project id
      }
    })

    const card = wrapper.find({ ref: 'card-online-csv' })

    expect(card.isVisible()).to.equal(true)
  })

  it('should show the collapsed content when the card is clicked and close other importers', () => {
    expect(store.state.task.importer.isOnlineCsvImporterVisible).to.equal(false)

    const wrapper = mount(OnlineCsvImporter, {
      store,
      localVue,
      router,
      props: {
        id: 1 // project id
      }
    })

    const card = wrapper.find({ ref: 'card-online-csv' })
    card.trigger('click')

    expect(store.state.task.importer.isOnlineCsvImporterVisible).to.equal(true)

    expect(store.state.task.importer.isLocalCsvImporterVisible).to.equal(false)
    expect(store.state.task.importer.isGoogleDocImporterVisible).to.equal(false)
    expect(store.state.task.importer.isAmazonS3ImporterVisible).to.equal(false)
    expect(store.state.task.importer.isDropboxImporterVisible).to.equal(false)
    expect(store.state.task.importer.isFlickrImporterVisible).to.equal(false)
  })

  it('should call importOnlineCsvTasks on submit', function () {
    store.commit('task/importer/isOnlineCsvImporterVisible', true)
    const actionSpy = sandbox.spy(store, 'dispatch')

    const wrapper = mount(OnlineCsvImporter, {
      store,
      localVue,
      router,
      props: {
        id: 1 // project id
      }
    })

    const form = wrapper.find({ ref: 'form' })
    form.trigger('submit')

    expect(actionSpy.calledWith('task/importer/importOnlineCsvTasks')).to.equal(true)
  })

  afterEach(() => {
    store.commit('task/importer/setOnlineCsvImporterVisible', false)
    store.commit('task/importer/setLocalCsvImporterVisible', false)
    store.commit('task/importer/setOnlineCsvImporterVisible', false)
    store.commit('task/importer/setAmazonS3ImporterVisible', false)
    sandbox.restore()
  })
})
