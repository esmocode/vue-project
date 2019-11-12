<template>
  <b-modal id="status-modal" :title="title" :ok-only="true">
    <div v-if="success" class="my-4 d-flex justify-content-center align-items-center">
      <span class="icon green">
        <faicon icon="check-circle" />
      </span>
      Success!
    </div>
    <div v-if="!success" class="my-4 d-flex justify-content-center align-items-center">
      <span class="icon red">
        <faicon icon="frown-open" />
      </span>
      Failed!
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'modal',
  props: ['success'],
  computed: {
    title () {
      if (this.success) {
        return 'Congrats!'
      } else {
        return 'Sorry!'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  font-size: 40px;
  margin-right: 15px;
}
.green {
  color: #4caf50;
}
.red {
  color: #c73f3f;
}
</style>
