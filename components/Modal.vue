<template>
  <div class="modal-card" style="width: 500px">
    <header class="modal-card-head">
      <button type="button" class="delete" @click="$emit('close')" />
    </header>
    <section class="modal-card-body">
      <div class="has-text-centered">
        <img class="image-card" :src="data.image" alt="">
      </div>
      <div class="has-text-centered">
        <p class="is-size-3 mt-4">{{ data.name }}</p>
        <p>Specie: {{ data.species }}</p>
        <p>Alive: {{ data.status }}</p>
        <p>Gender: {{ data.gender }}</p>
        <p>Type: {{ data.type || 'unknown' }}</p>
        <p>Origin: {{ data.origin.name }}</p>
        <p>Last location: {{ data.location.name }}</p>
      </div>
    </section>
    <footer class="modal-card-foot">
      <b-button label="Close" @click="$emit('close')" />
    </footer>
  </div>
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

}
</script>
<style>
.image-card {
  border-radius: 50%;
}
</style>
