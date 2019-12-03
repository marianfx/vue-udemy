<template>
    <div class="container">
        <form style="margin-top: 20px;" v-if="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <app-control-fullname v-model="user.fullName"></app-control-fullname>
                    <div class="row">
                      <div class="form-group col-xs-12">
                        <label for="email">E-Mail</label>
                        <input name="email" type="email" class="form-control" placeholder="E-mail" v-model="user.email">
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group col-xs-12">
                        <label for="password">Password</label>
                        <input name="password" type="password" class="form-control" placeholder="Password" v-model="user.password">
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group col-xs-12">
                        Store data?
                        <label for="store-yes">
                        <input name="store-yes" type="radio"   v-model="user.storeData" value="yes">
                          Yes</label>

                        <label for="store-no">
                        <input name="store-no" type="radio"   v-model="user.storeData" value="no">
                          No</label>
                      </div>
                    </div>
                    <button type="button" @click="submit()" class="btn btn-primary">Submit</button>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <template v-if="submitted">
          <hr>
          <div class="row">
              <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <div class="panel panel-default">
                      <div class="panel-heading">
                          <h4>Your Data</h4>
                      </div>
                      <div class="panel-body">
                          <p>Full Name: {{ user.fullName }}</p>
                          <p>Mail: {{ user.email }} </p>
                          <p>Password: {{ user.password }}</p>
                          <p>Store in Database?: {{ user.storeData }}</p>
                      </div>
                  </div>
              </div>
          </div>
        </template>
    </div>
</template>

<script src="./App.js">
</script>

<style>
</style>
