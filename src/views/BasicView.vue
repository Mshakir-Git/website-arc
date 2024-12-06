
<template>
<div class="page1">
  <div class="section_left"></div>
  <div class="section_right">
    <div class="section_image">
      <img alt="Profile Picture" class="profile_pic" src="@/assets/picture.jpeg" />
    </div>
    <div class="section_details">
      
      <div class="details">
        <h1>Web Developer.</h1>
        <div class="profile_info">
          Javascript, VueJS , Python
          <br/>
          <br/>
          <br/>
          Contact:
          <br/>
          <a href="mailto:shakirsibtain@gmail.com">shakirsibtain@gmail.com</a>
          <br/>
          +917780887005
          <br/>
          <a href="https://www.linkedin.com/in/shakir-sibtain-8308a3aa">LinkedIn</a>
          <br/>
        </div>
      </div>
      
    </div>
    
  </div>
</div>
</template>

<style scoped>
.page1 {
  display: flex;
  height: 100vh;
  width:100%;
}
.section_left {
  flex-grow: 4;
  background-color: rgb(43, 43, 43);
}
.section_right {
  flex-grow: 6;
  display:flex;
}
.section_image {
  flex-grow: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.section_details {
  flex-grow: 7;
  color: rgb(241, 241, 241);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: monospace;
  font-size: larger;
}
.profile_pic {
  position: relative;
  top:-50px;
  left:-160px;
  width:350px;
  height:350px;
  border-radius: 20px;
}
.section_details .details {
  position: relative;
  top:-80px;
}
h1 {
  font-size: 60px;
}
a {
  color: rgb(202, 202, 202);
}
@media (max-width: 1400px) {
.page1 {
  width:100%;
  flex-direction: column;
}
.section_left {
  display: none;
}
.profile_pic {
  position: relative;
  top:0px;
  left:0px;
  width:270px;
  height:270px;
  padding-top:10px ;
}
.section_image {
  align-items: center;
}
.section_details {
  align-items: center;
  padding-left: 10px;
}
.section_details .details {
  position: relative;
  top:-20px;
}
}
@media (max-width: 900px) {
.section_right {
  flex-direction: column;
}

}
</style>
