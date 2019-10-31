<template>
  <h1 class="is-size-1">
      This is the Game Page
  <div class="columns">
    <div class="column">
      <nav class="panel">
        <p class="panel-heading">
          Player
        </p>
        <a class="panel-block is-active">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          bulma
        </a>
      </nav>
     </div>
    <div class="column">
      Second column
    </div>
    </div>
</template>

<script>
import { Game_Client, My_Captions } from "../models/Game";

export default {
  data: () => ({
    game: Game_Client
  })
}
</script>

<style>

</style>