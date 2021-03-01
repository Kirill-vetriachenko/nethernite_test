<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="PACKAGES"
      :items-per-page="10"
      class="elevation-1"
      disable-filtering
      @click:row="OPEN_DIALOG"
    ></v-data-table>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DataTable",
  data() {
    return {
      headers: [
        { text: "Name", align: "start", value: "name", sortable: false },
        { text: "Type", value: "type", align: "end", sortable: false },
        { text: "Hits", value: "hits", align: "end", sortable: false },
      ],
    };
  },
  mounted() {
    this.GET_PACKAGES();
  },
  computed: {
    ...mapGetters(["PACKAGES"]),
  },
  methods: {
    ...mapActions(["OPEN_DIALOG", "CLOSE_DIALOG", "GET_PACKAGES"]),
  },
};
</script>

<style lang="scss">
.v-data-footer__select {
  display: none !important;
}
.v-data-table {
  tr {
    cursor: pointer;
  }
}
</style>