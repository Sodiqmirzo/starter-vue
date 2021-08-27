<template>
  <div class="about">
    <h1>This is an about page</h1>

    <pre
      >{{ usersFields }}      
    </pre>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState, mapActions } from "vuex";

export default {
  mounted() {
    // this.$store.dispatch("users/fetchUsers").then((res) => {
    //   console.log("Done", res);
    // });

    this.fetchUsers().then((res) => {
      console.log("res", res);
    });
  },

  computed: {
    // usersListFromState() {
    //   return this.$store.state.users.usersList || [];
    // },
    ...mapState({
      usersFields: (state) => state.users.usersFields || {},
    }),
  },

  methods: {
    ...mapActions("users", ["fetchUsers"]),
  },
};
</script>
