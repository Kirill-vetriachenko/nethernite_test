<template>
  <v-footer
    app
    dark
    class="blue-grey darken-4"
  >
    <v-container fluid>
      <v-row justify="center">
        <v-row
          align="center"
          class="spacer"
        >
          <v-col
            cols="2"
            sm="2"
            md="2"
            align="center"
            class="pa-5"
          >
            <v-avatar size="100px">
              <img
                class="footer__avatar"
                alt="Avatar"
                src="@/assets/avatar.jpg"
              >
            </v-avatar>
          </v-col>

          <v-col cols="10" sm="10" md="8">
            <v-row>
              <v-col
                class="text-no-wrap"
                cols="12"
                sm="12"
              >
                <strong>Kirill Vetriachenko</strong>
              </v-col>

              <v-col cols="12" class="grey--text text-truncate pb-5">
                <a
                  target="_blank"
                  href="https://github.com/Kirill-vetriachenko/nethernite_test"
                >https://github.com/Kirill-vetriachenko/nethernite_test</a>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-row>
    </v-container>

  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
.footer {
  &__avatar {
    object-fit: cover;
    object-position: top;
  }
}
</style>