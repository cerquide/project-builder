import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Discover from '@/components/Discover'
import Project from '@/components/Project/Project'
import ProjectBuilder from '@/components/Project/Builder/ProjectBuilder'
import About from '@/components/About'
import TaskBuilder from '@/components/Task/Builder/TaskBuilder'
import TemplateRenderer from '@/components/Task/TemplateRenderer'
import Profile from '@/components/Profile/Profile'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      beforeEnter: (to, from, next) => {
        store.dispatch('user/signOut').then(signedOut => {
          if (signedOut) {
            next({ name: 'home' })
          }
        })
      }
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: (to, from, next) => {
        store.commit('user/isInProfileEditionMode', false)
        next()
      }
    },
    {
      path: '/profile/edit',
      name: 'profile.edition',
      component: Profile,
      beforeEnter: (to, from, next) => {
        store.commit('user/isInProfileEditionMode', true)
        next()
      }
    },

    // Project related pages

    {
      path: '/project/:id',
      name: 'project',
      component: Project,
      props: true
    },
    {
      path: '/project/:id/task-presenter',
      name: 'project.task.presenter',
      component: TemplateRenderer,
      props: true,
      beforeEnter: (to, from, next) => {
        if (!store.state.project.selectedProject.hasOwnProperty('id')) {
          store.dispatch('project/getProject', to.params.id).then(() => {
            next()
          })
        } else {
          next()
        }
      }
    },

    // Project builder steps

    {
      path: '/project/builder/name',
      name: 'project.builder.name',
      component: ProjectBuilder,
      beforeEnter: (to, from, next) => {
        store.commit('project/builder/setCurrentStep', 'name')
        next()
      }
    },
    {
      path: '/project/builder/information',
      name: 'project.builder.information',
      component: ProjectBuilder,
      beforeEnter: (to, from, next) => {
        if (store.state.project.builder.steps.name === true) {
          store.commit('project/builder/setCurrentStep', 'information')
          next()
        } else {
          next({ name: 'project.builder.name' })
        }
      }
    },
    {
      path: '/project/builder/story',
      name: 'project.builder.story',
      component: ProjectBuilder,
      beforeEnter: (to, from, next) => {
        if (store.state.project.builder.steps.name === true && store.state.project.builder.steps.information === true) {
          store.commit('project/builder/setCurrentStep', 'story')
          next()
        } else {
          next({ name: 'project.builder.information' })
        }
      }
    },
    {
      path: '/project/builder/end',
      name: 'project.builder.end',
      component: ProjectBuilder,
      beforeEnter: (to, from, next) => {

        if (store.state.project.builder.steps.name === true &&
          store.state.project.builder.steps.information === true &&
          store.state.project.builder.steps.story === true) {

          store.dispatch('project/builder/reset')
          store.commit('project/builder/setCurrentStep', 'end')

          next()
        } else {
          next({ name: 'project.builder.story' })
        }
      }
    },

    // Task builder steps

    {
      path: '/task/builder/material',
      name: 'task.builder.material',
      component: TaskBuilder,
      beforeEnter: (to, from, next) => {
        store.commit('task/builder/setCurrentStep', 'material')
        next()
      }
    },
    {
      path: '/task/builder/job',
      name: 'task.builder.job',
      component: TaskBuilder,
      beforeEnter: (to, from, next) => {
        if (store.state.task.builder.steps.material === true) {
          store.commit('task/builder/setCurrentStep', 'job')
          next()
        } else {
          next({ name: 'task.builder.material' })
        }
      }
    },
    {
      path: '/task/builder/template',
      name: 'task.builder.template',
      component: TaskBuilder,
      beforeEnter: (to, from, next) => {
        if (store.state.task.builder.steps.job === true) {
          store.commit('task/builder/setCurrentStep', 'template')
          next()
        } else {
          next({ name: 'task.builder.job' })
        }
      }
    },
    {
      path: '/task/builder/source',
      name: 'task.builder.source',
      component: TaskBuilder,
      beforeEnter: (to, from, next) => {
        if (store.state.task.builder.steps.template === true) {
          store.commit('task/builder/setCurrentStep', 'source')
          next()
        } else {
          next({ name: 'task.builder.template' })
        }
      }
    },
    {
      path: '/task/builder/summary',
      name: 'task.builder.summary',
      component: TaskBuilder,
      beforeEnter: (to, from, next) => {
        if (store.state.task.builder.steps.source === true) {
          store.commit('task/builder/setCurrentStep', 'summary')
          next()
        } else {
          next({ name: 'task.builder.source' })
        }
      }
    }

  ]
})

const publicRoutes = [
  'home', 'login', 'logout', 'discover', 'about'
]

router.beforeEach((to, from, next) => {
  if (store.state.user.logged) {
    // user already logged (getAccountProfile already done) so he can access all the routes
    next()
  } else {
    // test if the user can be logged with his session if not already logged
    store.dispatch('user/getAccountProfile').then(() => {
      // can go next also if not logged and if the route is public
      if (store.state.user.logged || publicRoutes.includes(to.name)) {
        next()
      } else {
        // if the route needs to be logged the user is redirected
        from.name !== null ? next(false) : next({ name: 'login' })
      }
    }).catch(() => {
      next({ name: 'home' })
    })
  }
})

export default router
