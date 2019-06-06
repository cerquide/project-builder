import axios from 'axios'
import slug from 'slug'
import { dataURItoBlob } from '@/helper'

axios.defaults.headers['Content-Type'] = 'application/json'

export default {
  getCategories () {
    return axios.get(process.env.BASE_API_URL + 'category')
  },

  getAllProjects () {
    return axios.get(process.env.BASE_API_URL + 'project')
  },

  getFeaturedProjects () {
    return axios.get(process.env.BASE_ENDPOINT_URL + 'project/category/featured/', {
      data: {},
      withCredentials: true
    })
  },

  getProjectsWithCategory (categoryId) {
    return axios.get(process.env.BASE_API_URL + 'project?category_id=' + categoryId)
  },

  getProjectById (id, apiKey) {
    return axios.get(process.env.BASE_API_URL + 'project/' + id + '?api_key=' + apiKey, {
      data: {}
    })
  },

  getProjectUserProgress (projectId) {
    return axios.get(process.env.BASE_API_URL + 'project/' + projectId + '/userprogress', {
      data: {}
    })
  },

  createProject (apiKey, { name, shortDescription, longDescription }) {
    return axios.post(process.env.BASE_API_URL + 'project?api_key=' + apiKey, {
      name: name,
      short_name: slug(name, { lower: true, replacement: '_' }),
      description: shortDescription,
      long_description: longDescription
    })
  },

  getProjectUpdateOptions (projectShortName) {
    return axios.get(process.env.BASE_ENDPOINT_URL + 'project/' + projectShortName + '/update', {
      data: {},
      withCredentials: true
    })
  },

  updateProject (csrf, projectShortName, projectId, form) {
    return axios.post(process.env.BASE_ENDPOINT_URL + 'project/' + projectShortName + '/update', {
      ...form, id: projectId
    }, {
      withCredentials: true,
      headers: {
        'X-CSRFToken': csrf
      }
    })
  },

  uploadAvatar (csrf, projectShortName, file) {
    const formData = new FormData()
    formData.append('btn', 'Upload')
    formData.append('avatar', dataURItoBlob(file))

    return axios.post(process.env.BASE_ENDPOINT_URL + 'project/' + projectShortName + '/update?response_format=json', formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-CSRFToken': csrf
      }
    })
  },

  getPublishProjectOptions (projectShortName) {
    return axios.get(process.env.BASE_ENDPOINT_URL + 'project/' + projectShortName + '/publish', {
      withCredentials: true,
      data: {}
    })
  },

  publishProject (csrf, projectShortName) {
    return axios.post(process.env.BASE_ENDPOINT_URL + 'project/' + projectShortName + '/publish', {}, {
      withCredentials: true,
      headers: {
        'X-CSRFToken': csrf
      }
    })
  },

  getStatistics (projectShortName) {
    return axios.get(process.env.BASE_ENDPOINT_URL + 'project/' + projectShortName + '/stats', {
      withCredentials: true,
      data: {}
    })
  },

  getResults (projectShortName) {
    return axios.get(process.env.BASE_ENDPOINT_URL + 'project/' + projectShortName + '/results', {
      withCredentials: true,
      data: {}
    })
  }
}
