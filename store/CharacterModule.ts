import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Character } from '~/entities/Character'
import { $axios } from '~/utils/api'

interface Search {
  page: number
  search?: string
}

@Module({
  name: 'CharacterModule',
  stateFactory: true,
  namespaced: true
})
export default class CharacterModule extends VuexModule {
  public characters: Character[] = []
  public pages: number = 0

  @Action({ rawError: true })
  async getAll(page: number) {
    const response = await $axios.$get(`/character?page=${page}`)
    console.log(response)
    this.setCharacters(response.results)
    this.setPages(response.info.pages)
  }
  @Action({ rawError: true })
  async search(filter: Search) {
    const search = `&name=${filter.search}`
    const response = await $axios.$get(`/character?page=${filter.page}${filter.search ? search : ''}`)
    this.setCharacters(response.results)
    this.setPages(response.info.pages)
    console.log(response.info.pages)

  }

  @Mutation
  setCharacters(characters: Character[]) {
    this.characters = characters
  }
  @Mutation
  setPages(pages: number) {
    this.pages = pages
  }
}

