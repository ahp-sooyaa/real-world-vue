<template>
  <div class="about">
    <h1>Events Lists</h1>
    <router-link :to="{ name: 'event-show', params: { id: '1' } }"
      >Showing Events
    </router-link>
  </div>
</template>
