<template>
  <transition name="fade">
    <div class="has-text-centered">
      <img class="image-card" @click="click" :src="data.image" alt="">
      <p>
        <a class="is-size-4 has-text-primary" @click="click">{{ data.name }}</a>
      </p>
    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Character } from '~/entities/Character';

@Component({
  name: 'Card',
  components: {
  }
})
export default class Card extends Vue {
  @Prop() readonly data!: Character
  click() {
    this.$emit('click')
  }

}
</script>
<style>
.image {
  cursor: pointer;
}

.image-card {
  border-radius: 50%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}
</style>

