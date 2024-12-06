
<template>
<div class="modal_background" ref="modal" :class="{modal_background_active:is_active}" @click="$emit('modal_close')">
<div class="modal" @click.stop="">
    <div class="modal_header">
        <h1>Contact</h1>
    </div>


    <div class="modal_body">
        <div class="mail">
        <i class="mail_icon bi bi-envelope"></i>
          <a class="mail_link" href="mailto:shakirsibtain@gmail.com">shakirsibtain@gmail.com</a>
        </div>
        <div class="links">
          <i class="bi bi-telephone"></i>
          <span>+917780887005</span>
            -
          <i class="bi bi-linkedin"></i>
          <a href="https://www.linkedin.com/in/shakir-sibtain-8308a3aa">LinkedIn</a>
            -
          <i class="bi bi-github"></i>
          <a href="https://github.com/Mshakir-Git">Github</a>
        </div>
        <div class="button" @click="$emit('modal_close')">
        Close
      </div>
      </div>

</div>
</div>


</template>

<script setup>
import { useTemplateRef, ref, onMounted } from 'vue'

const props = defineProps(['click_position'])
const modal = useTemplateRef("modal")

const is_active=ref(false)
onMounted(()=>{
    modal.value.style.left=props.click_position.x + "px"
    modal.value.style.top=props.click_position.y + "px"
    setTimeout(()=>{is_active.value=true},20)
})



</script>

<style scoped>
.modal_background {
    position: absolute;
    background-color: rgba(0, 0, 0, 0);
    width: 0vw;
    height: 0vh;
    overflow: hidden;
    opacity:0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: left 200ms,top 200ms, width 200ms,height 200ms,opacity 50ms,background-color 1s;
}
.modal_background_active{
    left: 0px !important;
    top: 0px !important;
    background-color: rgba(0, 0, 0, 0.164);
    width: 100vw ;
    height: 100vh;
    opacity: 1;

}
.modal{
    font-family: monospace;
    border-radius: 20px;
    min-height: 700px;
    min-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background: linear-gradient(#e4ffe3,rgb(228, 255, 195)); */
    background-color: #f9fff0;

}
.modal_header{
    flex:7;
    width:100%;
    background-color: #a2ff68;
    border-radius: 20px 20px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal_body{
    flex: 93;
    padding-top: 100px;
}
.bi{
    margin-left: 10px;
    margin-right: 5px;
}
.mail {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
}
.mail a {
    color: black;
    text-decoration: none;

}
.mail_icon  {
font-size: 135px;
}
.mail_link{
    font-size: 20px;
}
.button{
    display: none;
}
@media (max-width: 600px) {
    .modal {
        width: 100vw;
        height: 100vh;
    }
    .modal_body {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-around;
    }
    .button {
        cursor: pointer;
        padding: 20px;
        background-color: #ffa36e;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 15px;
        margin-bottom: 50px;
    }
    .mail {
        margin-bottom: 0px;
    }
    .modal_body{
        padding-top: 10px;
    }
}

</style>

    