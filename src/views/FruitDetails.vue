<template>
    <h1>Fruit Details</h1>
    <p>This is fruit with the id of {{ id }}</p>

 </template>

<script>
export default {
//    data() {
//       return {
//          id: this.$route.params.id,
//       };
//    },  <p>This is fruit with the id of {{ $route.params.id }}</p>

   props: ['id'],
};
</script>