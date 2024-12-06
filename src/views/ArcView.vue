
<template>

<canvas ref="canvas" class="canvas"></canvas>

  <div class="page_root" ref="page_root">
    <div class="top">
      <div class="top_left">
        <img alt="Profile Picture" class="profile_pic" src="@/assets/picture.jpeg" />
      </div>
      <div class="top_right">
        <div class="details">
        <h1>Software Engineer</h1>
        <span class="languages">javascript - VueJs - python</span>
      </div>
      </div>
    </div>
    <div class="bottom"> 
      <div class="button" @click="open_modal($event)">
        Contact
      </div>
    </div>
  </div>

<ContactModal :click_position="click_position" v-if="modal_open" @modal_close="modal_open=false" />

</template>

<script setup>
import ContactModal from '@/components/ContactModal.vue';
import { useTemplateRef, ref, onMounted } from 'vue'

const canvas = useTemplateRef('canvas')
const page_root = useTemplateRef('page_root')

const modal_open = ref(false)
const click_position=ref({
  x:0,
  y:0,
})
const open_modal=(event)=>{
  click_position.value={
    x:  event.target.offsetLeft + event.target.offsetWidth/2,
    y: event.target.offsetTop+ event.target.offsetHeight/2
  }
  modal_open.value=true
  
}

onMounted(() => {
  let window_width=window.innerWidth
  let window_height=window.innerHeight

  const alt=(window_width/2)*Math.sin(Math.PI/3)
  canvas.value.width=window.innerWidth
  canvas.value.height=window.innerHeight
  let context=canvas.value.getContext("2d")
  context.fillStyle = "#ffffff";
  context.fillRect(0,0,window_width,window_height);

  context.fillStyle = "#313843";
  context.beginPath();

  context.arc((3*window_width)/4, -30 + alt + window_height/2, window_width/2, -Math.PI/3, -(2 * Math.PI)/3,true);
  context.arc(window_width/4, -30 - alt + window_height/2, window_width/2, Math.PI/3, (2 * Math.PI)/3);

  context.lineTo(0,window_height)

  context.lineTo(window_width,window_height)

  context.fill();

  page_root.value.style.backgroundImage= 'url('+canvas.value.toDataURL()+')'

})
</script>


<style scoped>

.page_root {
  height: 100vh;
  display:flex;
  flex-direction: column;
  font-family: monospace;
  background-position: center;
  background-size: cover;
}
.page_root .top {
  flex: 6;
  display: flex;
  flex-direction: row;
}
.page_root .bottom {
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top_left {
  flex:1;
  display: flex;
  align-items: end;
  justify-content: center;
}
.top_right {
  flex:1;
  display: flex;
  align-items: end;
  justify-content: center;
}
h1 {
  font-size: 3rem;
}
.languages {
  font-size: larger;
}
.top_right .details{
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}
.profile_pic{
  width: 400px;
  height: 400px;
  border-radius: 200px;
}
.button {
  cursor: pointer;
  width: 220px;
  height: 80px;
  background-color: #C3FF9E;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 2em;
  transition: 90ms;

}
.button:hover {
  background-color: #a2ff68;
  box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
  transform: translateY(-2px);
}

.canvas {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
  visibility: hidden;
}
@media (max-width: 600px) {
  .profile_pic{
    width: 300px;
    height: 300px;
    margin-top: 50px;
  }
  .page_root .top {
    flex: 6;
    flex-direction: column;
    justify-content: center;
  }
  h1 {
    margin-top: 30px;
    font-size: 30px;
  }
}
</style>
