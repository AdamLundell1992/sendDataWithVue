<template>
  <div>
    <b-field class="recived" label="Recived in child:">
      <span class="text">{{ message }}</span>
    </b-field>
  </div>
</template>

<script>
export default {
  name: "refChild",
  data() {
    return {
      message: "",
    };
  },
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
