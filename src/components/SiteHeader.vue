<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand href="#">Mohammad Eslami | Vue Test</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item target="_blank" href="http://linkedin.com/in/esmo">
              <faicon :icon="['fab', 'linkedin']" />
            </b-nav-item>
            <b-nav-item target="_blank" href="http://github.com/esmodev">
              <faicon :icon="['fab', 'github']" />
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'site-header'
}
</script>

<style>
</style>
