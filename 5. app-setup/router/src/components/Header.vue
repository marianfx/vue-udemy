<template>
    <ul class="nav nav-pills">
        <!-- tag=li => compiles it as LI -->
        <!-- Home stays selected all time because the URL starts always with the home path. Use 'exact' to match the full path -->
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
    </ul>
</template>