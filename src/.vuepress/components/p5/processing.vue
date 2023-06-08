<template>
  <div id="container"></div>
</template>
<script setup lang="ts">
import p5 from 'p5'
import { onMounted } from 'vue';
let count = 0
const sketch = (s:any) => {
  s.setup = () => {
    s.createCanvas(400, 400)
    s.background(120)
  }
  s.draw = () => {
    const x = Math.sin(count) * 100 + 200
    const y = Math.cos(count) * 100 + 200
    s.circle(x, y, 50)
    count += 0.1
  }
}
onMounted(() => new p5(sketch, 'container'))
</script>