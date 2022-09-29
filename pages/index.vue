<template>
  <section class="section">
    <div class="has-text-centered">
      <img width="500px" src="../assets/logo.png" alt="">
      <div>
        <a class="button is-primary mt-3" href="https://github.com/arturogonet/rickandmorty" target="_blank">Github</a>
      </div>
    </div>
    <div class="columns mt-6">
      <div class="column is-10 is-offset-1">
        <div class="field is-grouped">
          <p class="control is-expanded">
            <input class="input" type="text" v-model="filter" placeholder="Find a character">
          </p>
          <p class="control">
            <a class="button is-primary" @click="search(1)">
              Search
            </a>
            <a class="button is-primary" @click="clean">
              Clear
            </a>
          </p>
        </div>
      </div>
    </div>
    <div v-if="showcard" class="grid-container mt-6">
      <Card v-if="showcard" v-for="item in characters" :key="item.id" :data="item" @click="showModal(item)" />
    </div>
    <div v-else class="grid-container mt-6">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
    <b-modal v-model="isModalOpen" has-modal-card trap-focus :destroy-on-hide="false" aria-role="dialog"
      aria-label="Example Modal" close-button-aria-label="Close" aria-modal>
      <template #default="props">
        <modal :data="character" @close="props.close" />
      </template>
    </b-modal>
    <div class="has-text-centered mt-6">
      <b-button v-if="page != 1" @click="goToPage(page - 1)">{{ page - 1 }}</b-button>
      <b-button type="is-primary">{{ page }}</b-button>
      <b-button v-if="page != pages" @click="goToPage(page + 1)">{{ page + 1 }}</b-button>
      <b-button v-if="page != pages" @click="goToPage(pages)"> {{ pages }}</b-button>
    </div>
    <div class=" has-text-centered mt-6">
      <div>

        <a href="https://www.linkedin.com/in/arturo-guerrero-lopez/" target="_blank">Made by Arturo Guerrero Lopez</a>
      </div>
      <a class="button is-primary mt-3" href="https://github.com/arturogonet/rickandmorty" target="_blank">Github</a>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators';
import { Character } from '~/entities/Character';
import CharacterModule from '~/store/CharacterModule';

@Component({
  name: 'index',
  components: {
  }
})
export default class Index extends Vue {
  characterStore = getModule(CharacterModule, this.$store)
  character!: Character
  isModalOpen = false
  showcard = false
  filter: string | undefined = ''
  page = 1

  async mounted() {
    this.showcard = false
    await this.characterStore.search({ page: 0 })
    this.showcard = true
  }

  get characters() {
    return this.characterStore.characters
  }
  get pages() {
    return this.characterStore.pages
  }
  search(page: number) {
    this.page = page
    this.showcard = false
    this.characterStore.search({ search: this.filter, page })
    this.showcard = true
  }
  clean() {
    this.filter = undefined
    this.characterStore.search({ page: 1 })
  }
  goToPage(page: number) {
    this.page = page
    this.characterStore.search({ search: this.filter, page })
  }
  showModal(character: Character) {
    this.character = character
    this.isModalOpen = true
  }

}
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 30px;
}
</style>
