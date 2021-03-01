<template>
  <v-dialog
    v-if="IS_OPEN_DIALOG"
    max-width="700"
    v-model="IS_OPEN_DIALOG"
    @click:outside="CLOSE_DIALOG"
  >
    <v-card>
      <v-toolbar
        color="blue-grey darken-4"
        dark
      >{{ metadata && metadata.name || 'Oops' }}</v-toolbar>
      <div v-if="metadata.name">
        <v-list>
          <v-subheader>Info</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Author:</v-list-item-title>
              <v-list-item-subtitle> {{ metadata.author && metadata.author.name }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Description:</v-list-item-title>
              <v-list-item-subtitle>{{ metadata.description }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Downloads:</v-list-item-title>
              <v-list-item-subtitle>{{ Math.ceil(popularity.downloadsCount) }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>License:</v-list-item-title>
              <v-list-item-subtitle>{{ metadata.license }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Date:</v-list-item-title>
              <v-list-item-subtitle> {{ metadata.date }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Version:</v-list-item-title>
              <v-list-item-subtitle>{{ metadata.version }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-subheader v-if="repositoryUrl">Repository</v-subheader>
          <v-list-item v-if="repositoryUrl">
            <v-list-item-content>
              <v-text-field
                v-model="repositoryUrl"
                ref="textToCopy"
                solo
                readonly
                hide-details
                label="Clone url"
                @click:append-outer="copyUrl"
              >
                <template v-slot:append-outer>
                  <v-btn
                    color="blue-grey darken-4"
                    dark
                    @click="copyUrl"
                  >Copy</v-btn>
                </template>
              </v-text-field>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-list v-if="metadata.links">
          <v-subheader>Links</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(item, i) in metadata.links"
              :key="i"
              :href="item"
              target="_blank"
            >
              <v-list-item-content>
                <v-list-item-title
                  class="text-uppercase"
                  v-text="i"
                ></v-list-item-title>
                <v-list-item-subtitle v-text="item"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
      <v-card-title v-if="!metadata.name && !IS_LOADING">Something went wrong</v-card-title>
      <v-card-title v-if="IS_LOADING">Loading...</v-card-title>
      <v-card-actions class="justify-end">
        <v-btn
          text
          @click="CLOSE_DIALOG"
        >Close</v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar
      v-model="wasCopied"
      :timeout="3000"
    >
      {{ repositoryUrl }} was copied to clipboard

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="wasCopied = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Dialog",
  data() {
    return {
      wasCopied: false,
    };
  },
  computed: {
    ...mapGetters(["IS_OPEN_DIALOG", "CURRENT_DIALOG_DATA", "IS_LOADING"]),
    metadata() {
      return this.CURRENT_DIALOG_DATA?.collected?.metadata || [];
    },
    popularity() {
      return this.CURRENT_DIALOG_DATA?.evaluation?.popularity || [];
    },
    repositoryUrl() {
      return (
        this.CURRENT_DIALOG_DATA?.collected?.metadata.repository?.url || ""
      );
    },
  },
  methods: {
    ...mapActions(["CLOSE_DIALOG"]),
    copyUrl() {
      let textToCopy = this.$refs.textToCopy.$el.querySelector("input");
      textToCopy.select();
      document.execCommand("copy");
      this.wasCopied = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  &__link {
    text-decoration: none;
  }
}
</style>