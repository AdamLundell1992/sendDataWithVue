<template>
  <div class="home">
    <h1 class="title">Send data using between components using props</h1>
    <div class="parent">
      <b-field horizontal label="input in parent">
        <b-input type="text" v-model="input"> </b-input>
      </b-field>

      <b-field horizontal label="Message is:">
        <div v-if="input.length > 0" class="messageis">
          {{ input }}
        </div>
        <div v-if="input.length === 0" class="messageisnull"></div>
      </b-field>

      <b-button rounded type="is-primary" @click="sendData()">
        click to send
      </b-button>
    </div>
    <div class="child">
      <child></child>
    </div>
  </div>
</template>

<script>
import Child from "@/components/ChildVuex.vue";
export default {
  name: "Vuex",
  components: {
    Child,
  },
  data() {
    return {
      input: "",
      data: "",
    };
  },
  methods: {
    sendData() {
      this.$store.dispatch("setData", this.input);
    },
  },
};
</script>

<style scoped>
.home {
  gap: 1rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.parent {
  height: 20vh;
  width: 30%;
  border: 2px solid black;
}
.child {
  height: 20vh;
  width: 30%;
  border: 2px solid black;
}
.messageis {
  border-bottom: 1px solid black;
  text-align: start;
  font-family: Stencil Std, fantasy;
  font-size: 2rem;
}
.messageisnull {
  text-align: start;
  font-family: Stencil Std, fantasy;
  font-size: 2rem;
}
</style>
