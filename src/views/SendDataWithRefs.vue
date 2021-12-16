<template>
  <div class="home">
    <h1 class="title">Send data using between components using $refs</h1>
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
      <child ref="child" :message="message"></child>
    </div>
  </div>
</template>

<script>
// By adding refs in your child component inside the html you can fetch the refs from the child
import Child from "@/components/ChildRefs.vue";

export default {
  name: "refs",
  components: {
    Child,
  },
  data() {
    return {
      input: "",
    };
  },
  //   $refs.child is inside the childRefs component =>
  //   we can actually fill the data() inside that child by adding $data =>
  //   and now when we can see and use everything inside data we can pick the empty string message and fill it with that data from input
  methods: {
    sendData() {
      this.$refs.child.$data.message = this.input;
      return this.$refs.child.message;
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
