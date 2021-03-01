<template>
  <v-app>
    <Header />
    <v-main>
      <v-container fluid>
        <Loader />
        <DataTable />
        <Dialog />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import DataTable from "@/components/DataTable";
import Dialog from "@/components/Dialog";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    DataTable,
    Dialog,
    Loader,
    Footer,
  },
};
</script>
