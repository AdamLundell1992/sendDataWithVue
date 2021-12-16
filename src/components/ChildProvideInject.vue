<template>
  <div>
    <b-field class="recived" label="Recived in child:">
      <span class="text">{{ dataStuff.info }}</span>
    </b-field>
  </div>
</template>

<script>
// In html we write dataStuff.info to get the data because the inject use datastuff
export default {
  name: "ProvideInjectChild",
  //   We have done provide in the parent so now we use inject to get the data from the provide,
  // We fetching the provide object by doing a inject method and put in the parameter we made in the parent
  inject: ["dataStuff"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
  text-align: center !important;
  font-family: Stencil Std, fantasy;
  font-size: 5rem;
}
</style>
