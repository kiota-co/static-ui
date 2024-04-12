<template>
  <h1>Fruits page</h1>
  <h1>dynamic linking by attaching the id as params</h1>
  <div>
    <div :key="fruit.id" v-for="fruit in fruits">
      <div >
        <router-link :to="{ name: 'FruitDetails', params: { id: fruit.id } }">
          <h3>{{ fruit.name }}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: [
        {
          id: 1,
          name: "Apple",
          description: "Apples are an incredibly nutritious fruit.",
        },
        {
          id: 2,
          name: "Mango",
          description:
            "A mango is an edible stone fruit produced by the tropical.",
        },
        {
          id: 3,
          name: "Banana",
          description:
            "A banana is an elongated, edible fruit of the genus Musa.",
        },
      ],
    };
  },
};
</script>
