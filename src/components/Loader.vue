<template>
  <transition name="slide">
    <div
      class="loader"
      v-if="IS_LOADING"
    >
      <div class="loader__body">
        Loading
        <div class="loader__circle">
          <div
            v-for="i in 2"
            :key="i"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Loader",
  computed: {
    ...mapGetters(["IS_LOADING"]),
  },
};
</script>

<style lang="scss" scoped>
.loader {
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__body {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    background: #263238;
    color: white;
    gap: 0.5rem;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &__circle {
    display: inline-block;
    position: relative;
    width: 40px;
    height: 40px;

    div {
      position: absolute;
      border: 3px solid #fff;
      opacity: 1;
      border-radius: 50%;
      animation: anim-circle 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

      &:nth-child(2) {
        animation-delay: -0.5s;
      }
    }
  }
}

@keyframes anim-circle {
  0% {
    top: 20px;
    left: 20px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 40px;
    height: 40px;
    opacity: 0;
  }
}

.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
</style>