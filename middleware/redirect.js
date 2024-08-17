const playlistsNames = ['morning', 'evening', 'spa', 'party'];

export default defineNuxtRouteMiddleware((to) => {
  if (!playlistsNames.includes(to.params.id)) {
    return navigateTo('/404');
  }
});