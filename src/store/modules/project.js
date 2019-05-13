import api from '../../api/project'

// global state for this module
const state = {
  userProjects: [],
  categories: [],
  categoriesProjects: [],
  topProjects: []
}

// filter methods on the state data
const getters = {
  thumbnail: () => project => {
    return api.getProjectThumbnail(project)
  },
  getProjectsFor: state => category => {
    return state.categoriesProjects[category.short_name]
  },
  getFeaturedProjects: state => {
    // let featuredProjects = []
    return Object.values(state.categoriesProjects).reduce((previousValue, currentValue) => {
      let result = currentValue.filter(project => {
        return project.featured
      })
      return previousValue.concat(result)
    }, [])
  }
}

// async methods making mutations are placed here
const actions = {
  getAllPublishedProjects ({ commit }) {
    api.getAllProjects().then(value => {
      commit('setProjects', value.data)
    }).catch(reason => {
      commit('notification/showError', {
        title: 'Error during projects loading', content: reason
      }, { root: true })
    })
  },
  getUserProjects ({ commit, rootState }) {
    api.getUserProjects(rootState.user.infos).then(value => {
      commit('setUserProjects', value.data)
    }).catch(reason => {
      commit('notification/showError', {
        title: 'Error during user projects loading', content: reason
      }, { root: true })
    })
  }
}

// methods that change the state
const mutations = {
  setProjects (state, features) {
    state.categoriesProjects = features.categories_projects
    state.categories = features.categories
    state.topProjects = features.top_projects
  },
  setUserProjects (state, projects) {
    state.userProjects = projects
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
