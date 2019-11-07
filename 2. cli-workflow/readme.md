`npm install -g @vue/cli`
PS: don't install vue-cli, as it's deprecated.

Also don't use vue init, but vue create: 
`vue create project-name'

Here you can choose the 'plugins' to use. If wanting later to add more presets, use `vue add @vue/plugin-name`. 

To search online for existing plugins, they have a common naming convention: **vue-cli-plugin-xxx** for plugins made by people and **@vue/cli-plugin-xxx** for plugins that appear at initial config. For plugins named like this, you can simply use `vue add 'simplename'` (ex: for vue-cli-plugin-vuetify, use 'vue add vuetify').

Then run `npm run serve` to start the development server.

Things from the 'public' folder don't get compiled by webpack, so it's usually better to put assets in src\assets, where they'll be processed.

For **environment variables**, they are overwritten based on environment and in order to be available in the client code, they must have the name convention `VUE_APP_xxx`.

Deprecated (for Vue CLI 2): 
Vue has multiple project templates:
- simple: index.html + load Vue from the CDN
- webpack-simple (usually used): buildable app, with webpack
- webpack: complex (with testing etc)
- browserify: not webpack but browserify

