<script setup>
import "@/assets/js/recaptcha.js";
</script>

<template>
  <div class="recaptcha">
    <button
      class="g-recaptcha"
      data-sitekey="AIzaSyB6xTvo-mAjQWrn77BEQo025POyyhqtxLE"
      data-callback="onSubmit"
      data-action="submit"
    >
      Submit
    </button>
  </div>
</template>
