<template>
  <div class="home">
    <h1 class="title">
      Send data using between components using Inject/Provide
    </h1>
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
      <child2 :message="dataStuff"></child2>
    </div>
  </div>
</template>
<script>
// in the child component in html we send datastuff as parameter NOTE: because dataStuff : message ; (They are the same) you can also use message as parameter
import Child2 from "@/components/ChildProvideInject.vue";

export default {
  name: "InjectProvide",
  components: {
    Child2,
  },
  // to be able to make datastuff an object we need dataStuff that is -> message to be an object so we make message an object in data()
  data() {
    return {
      input: "",
      message: { info: "" },
    };
  },
  // Provide must return a object so we make datastuff to be this.message
  provide() {
    return { dataStuff: this.message };
  },
  // using input as a v-model to fetch the input and set the value in input inside the object message to the message.info
  methods: {
    sendData() {
      this.message.info = this.input;
      this.input = "";
      return this.message.info;
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
