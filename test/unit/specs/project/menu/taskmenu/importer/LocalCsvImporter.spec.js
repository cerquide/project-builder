import LocalCsvImporter from '@/components/Project/Menu/TaskMenu/Importer/LocalCsvImporter'
import Vuex from 'vuex'
import router from '@/router'
import store from '@/store'
import sinon from 'sinon'
import BootstrapVue from 'bootstrap-vue'
import { createLocalVue, mount } from '@vue/test-utils'

const localVue = createLocalVue()

describe('Project/Menu/TaskMenu/Importer/LocalCsvImporter.vue', () => {

  let sandbox
  localVue.use(Vuex)
  localVue.use(BootstrapVue)

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  it('should display the card', () => {

    const wrapper = mount(LocalCsvImporter, {
      store,
      localVue,
      router,
      props: {
        id: 1 // project id
      }
    })

    const card = wrapper.find({ ref: 'card-csv' })

    expect(card.isVisible()).to.equal(true)
  })

  it('should show the collapsed content when the card is clicked and close other importers', () => {
    expect(store.state.task.importer.isLocalCsvImporterVisible).to.equal(false)

    const wrapper = mount(LocalCsvImporter, {
      store,
      localVue,
      router,
      props: {
        id: 1 // project id
      }
    })

    const card = wrapper.find({ ref: 'card-csv' })
    card.trigger('click')

    expect(store.state.task.importer.isLocalCsvImporterVisible).to.equal(true)

    expect(store.state.task.importer.isGoogleDocImporterVisible).to.equal(false)
    expect(store.state.task.importer.isOnlineCsvImporterVisible).to.equal(false)
    expect(store.state.task.importer.isAmazonS3ImporterVisible).to.equal(false)
    expect(store.state.task.importer.isDropboxImporterVisible).to.equal(false)
    expect(store.state.task.importer.isFlickrImporterVisible).to.equal(false)
  })

  it('should call importLocalCsvTasks on submit', function () {
    store.commit('task/importer/isLocalCsvImporterVisible', true)
    const actionSpy = sandbox.spy(store, 'dispatch')

    const wrapper = mount(LocalCsvImporter, {
      store,
      localVue,
      router,
      props: {
        id: 1 // project id
      }
    })

    const form = wrapper.find({ ref: 'form' })
    form.trigger('submit')

    expect(actionSpy.calledWith('task/importer/importLocalCsvTasks')).to.equal(true)
  })

  afterEach(() => {
    store.commit('task/importer/setLocalCsvImporterVisible', false)
    store.commit('task/importer/setLocalCsvImporterVisible', false)
    store.commit('task/importer/setOnlineCsvImporterVisible', false)
    store.commit('task/importer/setAmazonS3ImporterVisible', false)
    sandbox.restore()
  })
})
