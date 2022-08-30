<template>
  <div class="authNavbar">
    <img :src="gerb" alt="" />
    <p>{{ $t("complaints") }}</p>
  </div>
</template>
<script setup>
import gerb from "@/assets/gerb.svg";
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.authNavbar {
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
}
.authNavbar img {
  width: 62.1px;
  height: 62.1px;
  margin-left: 25px;
}
.authNavbar p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  color: #272a2c;
  margin-left: 11px;
}
@media (max-width: 800px) and (min-width: 668px) {
  .authNavbar p {
    font-size: 18px;
  }
  .authNavbar img {
    width: 50px;
    height: 50px;
    margin-left: 18px;
  }
}
@media (max-width: 667.9px) {
  .authNavbar p {
    font-size: 15px;
  }
  .authNavbar img {
    width: 40px;
    height: 40px;
    margin-left: 10px;
  }
}
</style>