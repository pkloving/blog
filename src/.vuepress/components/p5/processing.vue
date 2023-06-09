<template>
  <div id="container"></div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
const p5Module = () => import('p5')
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
onMounted(async () => {
  const p5 = (await p5Module()).default
  new p5(sketch, 'container')
})
</script>