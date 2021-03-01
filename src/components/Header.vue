<template>
  <v-app-bar
    app
    color="blue-grey darken-4"
    dark
  >
    <v-toolbar-title @click="GET_PACKAGES">Nethernite</v-toolbar-title>
    <v-spacer></v-spacer>
    <search />
  </v-app-bar>
</template>

<script>
import Search from "@/components/Search";
import { mapActions } from "vuex";
export default {
  name: "Header",
  components: {
    Search,
  },
  methods: {
    ...mapActions(["GET_PACKAGES"]),
  },
};
</script>
