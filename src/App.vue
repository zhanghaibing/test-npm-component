<template lang="html">
  <div style="height:100%">
    TEST {{ hello }}
    <jy-button></jy-button>
  </div>
</template>

<script>
// import { ButtonModel } from 'test-vue-components';

export default {
  // components: {
  //   ButtonModel,
  // },
  data() {
    return {
      hello: 'welcome',
    };
  },
};
</script>
