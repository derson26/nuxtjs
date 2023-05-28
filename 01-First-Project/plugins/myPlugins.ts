export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp
    return {
        provide: {
            sayHello: (message: string) => `Your message is ${message}`,
        }
    }
  })