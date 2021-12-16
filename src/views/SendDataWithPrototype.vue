<template>
  <div class="home">
    <h1 class="title">Send data using between components using Prototype</h1>
    <h3>
      Weard thing with this is that after you pressed "click to send" you need
      to route to another view and back to se result
    </h3>
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
      <child2></child2>
    </div>
  </div>
</template>

<script>
import Child2 from "@/components/ChildPrototype.vue";
import Vue from "vue";

export default {
  name: "SenDataWithPrototype",
  components: {
    Child2,
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    sendData() {
      Vue.set(Vue.prototype, "$things", this.input);
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
