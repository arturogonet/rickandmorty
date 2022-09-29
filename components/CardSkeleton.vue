<template>
  <div>
    <div class="is-flex is-justify-content-center">
      <b-skeleton position="is-centered" circle width="300px" height="300px"></b-skeleton>
    </div>
    <div class="has-text-centered">
      <p class="mt-4">
        <b-skeleton height="30px"></b-skeleton>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'CardSkeletton',
  components: {
  }
})
export default class CardSkeletton extends Vue {
}
</script>
