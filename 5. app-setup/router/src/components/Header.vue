<template>
    <ul class="nav nav-pills">
        <!-- tag=li => compiles it as LI -->
        <!-- Home stays selected all time because the URL starts always with the home path. Use 'exact' to match the full path -->
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/user/1" tag="li" active-class="active"><a>User 1</a></router-link>
        <!-- Load same component => VUE doesn't change it if we don't react to changes (id remains 1) -->
        <router-link to="/user/2" tag="li" active-class="active"><a>User 2</a></router-link>
    </ul>
</template>