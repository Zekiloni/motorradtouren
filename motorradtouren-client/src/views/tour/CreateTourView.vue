<template>
   <div class="create-tour">
      <h2>Create a New Tour</h2>
      <form @submit.prevent="submitTour">
         <div class="form-group">
            <label for="title">Title:</label>
            <input type="text" id="title" v-model="tour.title" required />
         </div>
         <div class="form-group">
            <label for="description">Description:</label>
            <textarea id="description" v-model="tour.description" required></textarea>
         </div>
         <div class="form-group">
            <label for="image">Image:</label>
            <input type="file" id="image" @change="handleImageUpload" accept="image/*" />
         </div>
         <div class="form-group">
            <label for="gpx">GPX File:</label>
            <input type="file" id="gpx" @change="handleGpxUpload" accept=".gpx" />
         </div>
         <button type="submit">Create Tour</button>
      </form>
   </div>
</template>

<script lang="ts">
   import { Vue } from 'vue-class-component';

   export default class CrateTourView extends Vue {
      tour = {
         title: '',
         description: '',
         image: null,
         gpx: null,
      };

      submitTour() {}

      handleImageUpload(event) {
         const file = event.target.files[0];
         this.tour.image = file;
      }

      handleGpxUpload(event) {
         const file = event.target.files[0];
         this.tour.gpx = file;
      }
   }
</script>
