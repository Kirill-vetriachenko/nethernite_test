<template>
  <v-text-field
    v-model="query"
    :append-outer-icon="'mdi-magnify'"
    clear-icon="mdi-close-circle"
    clearable
    label="Search"
    type="text"
    single-line
    hide-details
    @click:append-outer="search"
    @click:clear="clear"
    @keydoown.enter="search"
  ></v-text-field>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    ...mapActions(["SEARCH_PACKAGES"]),
    search() {
      this.SEARCH_PACKAGES(this.query);
    },
    clear() {
      this.query = "";
    },
  },
};
</script>