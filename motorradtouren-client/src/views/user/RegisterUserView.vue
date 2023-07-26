<template>
   <div class="register-user-view">
      <h2>Register User</h2>
      <form @submit.prevent="registerUser">
         <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="user.username" required />
         </div>
         <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="user.password" required />
         </div>
         <div class="form-group">
            <label for="drivingVehicle">Driving Vehicle:</label>
            <input type="text" id="drivingVehicle" v-model="user.ride" required />
         </div>
         <button type="submit">Register</button>
      </form>
   </div>
</template>

<script lang="ts">
   import { Vue } from 'vue-class-component';

   export default class RegisterUserView extends Vue {
      user = {
         username: '',
         password: '',
         ride: '',
      };

      async registerUser() {
         try {
            const response = await this.$axios.post('/api/users', this.user);
            // Handle the response if needed
            console.log(response.data);
         } catch (error) {
            // Handle errors, e.g., show an error message to the user
            console.error(error);
         }
      }
   }
</script>
