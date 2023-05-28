
const logged = false;
export default defineNuxtRouteMiddleware((to, from) => {
    // if (to.params.id === '1') {
    //   return abortNavigation()
    // }
    // if (to.path !== '/') {
    //   return navigateTo('/')
    // }
    //Run in server side
    // console.log(to)
    
    if (to.path === '/protected' && !logged) {
      return navigateTo('/')
    } 
  })