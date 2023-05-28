# nuxtjs

Build your next Vue.js application with confidence using Nuxt. An open source framework under MIT license that makes web development simple and powerful.

Get started with Nuxt quickly with our online starters or start locally with your terminal.

To Solve this Error - Pinia installation:

# [Getting 500 internal server error for Nuxt 3 and Pinia](https://stackoverflow.com/questions/76295214/getting-500-internal-server-error-for-nuxt-3-and-pinia)

First, remove pinia and pinia/nuxt

```javascript
npm remove pinia
npm remove @pinia/nuxt
```

Then install old version. Sometimes maybe you have to use `--force` to ensure the installation successfully.

```javascript
npm i pinia@2.0.36 --force
npm i @pinia/nuxt@0.4.10
```

source: https://stackoverflow.com/questions/76295214/getting-500-internal-server-error-for-nuxt-3-and-pinia
