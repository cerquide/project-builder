<template>
  <div>
    <b-card v-b-toggle.csv-collapse @click="closeOtherImporters" ref="card-csv" class="text-center material" :class="{ 'material-selected': isLocalCsvVisible }">
      <i class="fas fa-file-csv fa-4x"></i>
      <div class="m-2">CSV file</div>
    </b-card>
    <b-collapse id="csv-collapse" v-model="isLocalCsvVisible">

      <p class="mt-4">You can download some CSV examples to know how to write it for each kind of template:</p>
      <ul>
        <li><b-link :href="csvSamples.image" download="image-sample.csv">Image example</b-link></li>
        <li><b-link :href="csvSamples.sound" download="sound-sample.csv">Sound example</b-link></li>
        <li><b-link :href="csvSamples.video" download="video-sample.csv">Video example</b-link></li>
        <li><b-link :href="csvSamples.pdf" download="pdf-sample.csv">PDF example</b-link></li>
        <li><b-link :href="csvSamples.geoCoding" download="geo-coding-sample.csv">Geo-coding example</b-link></li>
      </ul>

      <b-form ref="form" @submit.prevent="onSubmit" class="mt-4">
        <b-form-group>
          <b-file placeholder="Select a CSV file..." accept=".csv" v-model="csvFile"></b-file>
        </b-form-group>

        <b-button type="submit" variant="success">Send tasks</b-button>
      </b-form>
    </b-collapse>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'

import video from '@/assets/csv-samples/video.csv'
import image from '@/assets/csv-samples/image.csv'
import sound from '@/assets/csv-samples/sound.csv'
import pdf from '@/assets/csv-samples/pdf.csv'
import geoCoding from '@/assets/csv-samples/geo-coding.csv'

export default {
  name: 'LocalCsvImporter',
  data: () => {
    return {
      csvFile: '',
      csvSamples: {
        video,
        image,
        sound,
        pdf,
        geoCoding
      }
    }
  },
  methods: {
    ...mapMutations('task/importer', [
      'setAmazonS3ImporterVisible',
      'setLocalCsvImporterVisible',
      'setGoogleDocImporterVisible',
      'setOnlineCsvImporterVisible',
      'setFlickrImporterVisible',
      'setDropboxImporterVisible',
      'setTwitterImporterVisible'
    ]),
    ...mapActions('task/importer', [
      'importLocalCsvTasks'
    ]),

    onSubmit () {
      this.importLocalCsvTasks({
        project: this.project,
        file: this.csvFile
      })
    },

    closeOtherImporters () {
      this.setGoogleDocImporterVisible(false)
      this.setOnlineCsvImporterVisible(false)
      this.setAmazonS3ImporterVisible(false)
      this.setFlickrImporterVisible(false)
      this.setDropboxImporterVisible(false)
      this.setTwitterImporterVisible(false)
    }
  },
  computed: {
    ...mapState('task/importer', [
      'isLocalCsvImporterVisible'
    ]),
    ...mapState('project', {
      project: state => state.selectedProject
    }),

    isLocalCsvVisible: {
      get () {
        return this.isLocalCsvImporterVisible
      },
      set (value) {
        this.setLocalCsvImporterVisible(value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~bootstrap/scss/bootstrap.scss';

  .material {
    &:hover {
      cursor: pointer;
      transition: all 0.3s;
      background-color: $primary;
      color: $white;
    }
  }

  .material-selected {
    background-color: $primary;
    color: $white;
  }
</style>
