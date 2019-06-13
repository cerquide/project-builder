<template>
  <b-row class="mt-4">
    <b-col md="7" class="mb-2">

      <b-form ref="project-form" @submit.prevent="onSubmit">

        <b-form-group>

          <b-form-group
                  label="Project name"
                  :valid-feedback="validFeedback('name')"
                  :invalid-feedback="invalidFeedback('name')"
                  :state="validated('name')">
            <b-input placeholder="Name" v-model="form.name"></b-input>
          </b-form-group>

          <b-form-group
                  label="Project short description"
                  :valid-feedback="validFeedback('shortDescription')"
                  :invalid-feedback="invalidFeedback('shortDescription')"
                  :state="validated('shortDescription')">
            <b-textarea placeholder="Short description" v-model="form.shortDescription"></b-textarea>
          </b-form-group>

          <b-form-group label="Project category">
            <b-select v-model="form.category" :options="selectCategories"></b-select>
          </b-form-group>

        </b-form-group>

        <b-form-group
                label-size="lg"
                label-class="font-weight-bold mb-3"
                label="Project long description">

          <b-form-group
                  label="WHAT & WHY"
                  :valid-feedback="validFeedback('whatWhy')"
                  :invalid-feedback="invalidFeedback('whatWhy')"
                  :state="validated('whatWhy')">
            <b-textarea v-model="form.whatWhy"></b-textarea>
          </b-form-group>

          <b-form-group
                  label="HOW"
                  :valid-feedback="validFeedback('how')"
                  :invalid-feedback="invalidFeedback('how')"
                  :state="validated('how')">
            <b-textarea v-model="form.how"></b-textarea>
          </b-form-group>

          <b-form-group
                  label="WHO"
                  :valid-feedback="validFeedback('who')"
                  :invalid-feedback="invalidFeedback('who')"
                  :state="validated('who')">
            <b-textarea v-model="form.who"></b-textarea>
          </b-form-group>

          <b-form-group
                  label="KEEP TRACK"
                  :valid-feedback="validFeedback('keepTrack')"
                  :invalid-feedback="invalidFeedback('keepTrack')"
                  :state="validated('keepTrack')">
            <b-textarea v-model="form.keepTrack"></b-textarea>
          </b-form-group>

        </b-form-group>

        <b-button type="submit" variant="primary" class="float-right">Update project data</b-button>

      </b-form>

    </b-col>

    <b-col md="5" class="mb-2">

      <b-form ref="picture-form" @submit.prevent="onPictureSubmit">

        <b-form-group>

          <vue-cropper ref="cropper" :src="picture" :view-mode="2" :aspectRatio="4/3"></vue-cropper>
          <b-form-file @change="setImage" accept=".jpg, .png, .gif" placeholder="Choose a picture..." drop-placeholder="Drop picture here..."></b-form-file>

        </b-form-group>

        <b-button type="submit" variant="primary" class="float-right">Update project avatar</b-button>
      </b-form>

    </b-col>
  </b-row>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import VueCropper from 'vue-cropperjs'
import slug from 'slug'
import { getFormErrorsAsString } from '@/helper'

export default {
  name: 'ProjectEditor',
  components: {
    VueCropper
  },
  mounted () {
    if (Object.keys(this.project).length > 0) {
      this.initForm(this.project)
    }
    this.getCategories()
  },
  watch: {
    project (project) {
      if (Object.keys(project).length > 0) {
        this.initForm(project)
      }
    }
  },
  data: () => {
    return {
      form: {
        name: '',
        shortDescription: '',
        category: '',
        whatWhy: '',
        how: '',
        who: '',
        keepTrack: ''
      },
      picture: '',
      croppedPicture: '',
      validation: {
        name: {
          maxLength: 25
        },
        shortDescription: {
          maxLength: 120
        },
        whatWhy: {
          maxLength: 400
        },
        how: {
          maxLength: 400
        },
        who: {
          maxLength: 400
        },
        keepTrack: {
          maxLength: 400
        }
      }
    }
  },
  methods: {
    ...mapActions('project', [
      'getProject', 'uploadAvatar', 'updateProject', 'getCategories'
    ]),
    ...mapMutations('notification', [
      'showSuccess', 'showError', 'showInfo'
    ]),

    initForm (project) {
      this.form.name = project.name
      this.form.shortDescription = project.description
      this.form.category = project.category_id

      this.form = { ...this.form, ...JSON.parse(project.long_description) }

      if ('info' in project && 'thumbnail_url' in project.info) {
        this.picture = project.info.thumbnail_url
        this.$refs.cropper.replace(this.picture)
      }
    },

    onSubmit () {
      if (this.isFormValid()) {

        this.updateProject({
          project: this.project,
          form: {
            name: this.form.name,
            short_name: slug(this.form.name, { lower: true, replacement: '_' }),
            description: this.form.shortDescription,
            category_id: this.form.category,
            long_description: JSON.stringify({
              whatWhy: this.form.whatWhy,
              how: this.form.how,
              who: this.form.who,
              keepTrack: this.form.keepTrack
            })
          }
        }).then(response => {
          if ('form' in response && 'errors' in response.form) {
            this.showError({
              title: 'Error',
              content: getFormErrorsAsString(response.form.errors)
            })
          } else {
            this.showSuccess({
              title: 'Success',
              content: 'Project data updated'
            })
            this.getProject(this.project.id) // reload the project
          }
        })
      } else {
        this.showError({
          title: 'Incomplete form',
          content: 'All the fields must be validated to update the project data'
        })

      }
    },

    onPictureSubmit () {
      if (this.picture) {

        this.croppedPicture = this.$refs.cropper.getCroppedCanvas().toDataURL()

        this.uploadAvatar({
          project: this.project,
          image: this.croppedPicture
        }).then(response => {
          if (response) {
            this.showSuccess({
              title: 'Success',
              content: 'Project picture updated'
            })
            this.getProject(this.project.id)
            this.$refs.cropper.replace(this.croppedPicture)
          }
        })
      } else {
        this.showError({
          title: 'Picture not selected',
          content: 'You must select a picture to upload it'
        })
      }
    },

    setImage (event) {
      const file = event.target.files[0]

      if (!file.type.includes('image/')) {
        alert('Please select an image file')
        return
      }

      if (typeof FileReader === 'function') {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.picture = e.target.result
          this.$refs.cropper.replace(this.picture)
        }
        reader.readAsDataURL(file)
      } else {
        alert('Sorry, FileReader API not supported')
      }
    },

    isFormValid () {
      const formKeys = Object.keys(this.form).filter(el => el !== 'category')
      let isValidated = true
      for (let field of formKeys) {
        if (!this.validated(field)) {
          isValidated = false
        }
      }
      return isValidated
    },

    validated (field) {
      return this.$data['form'][field].length > 0 && this.$data['form'][field].length <= this.validation[field].maxLength
    },
    validFeedback (field) {
      return this.validation[field].maxLength - this.$data['form'][field].length + ' characters left'
    },
    invalidFeedback (field) {
      return this.$data['form'][field].length === 0 ? 'This field is mandatory' : 'This field should not exceed ' + this.validation[field].maxLength + ' characters'
    }
  },
  computed: {
    ...mapState('project', {
      project: state => state.selectedProject,
      categories: state => state.categories
    }),

    selectCategories () {
      return this.categories.map(category => {
        return {
          value: category.id,
          text: category.name
        }
      })
    }
  }
}
</script>

<style scoped>

</style>