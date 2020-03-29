<template>
    <div id="main">
        <div id="chart">
            <bubble></bubble>
        </div>
    </div>
</template>

<script>
import bubble from '../bubble.js'
export default {
    components: {
        bubble
    }
}
</script>

<style scoped>
#chart{
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding:30px;
  float:middle;
}
</style>