<template>
  <div class="download">
    <i class="fa-solid fa-plus"></i>
    <input
      type="file"
      ref="file"
      style="display: none"
      @change="InputChange($event)"
    />
    <span class="btn_download" @click="$refs.file.click()">
      {{text}}
    </span>
  </div>
</template>
<script setup>
import { ref } from "vue";
import http from "@/plugins/axios";
import store from '@/store'
const image = ref(null);
const dd = ref("")
const img = ref(null);
const props = defineProps({
  text:{
    type:String
  },
  img:{
    type: null
  }
})
const InputChange = (event) => {
  img.value = event.target.files[0];
  store.state.img = event.target.files[0].name
  image.value = URL.createObjectURL(event.target.files[0]);
  const formData = new FormData();
  formData.append("file",  img.value);
  formData.append("path", store.state.file_name);
  http.post("/resources/upload", formData).then((res) => {
    store.state.image_path = res.data.data
  });
};
</script>
<style scoped lang="scss">
.download {
  display: flex;
  align-items: center;
  height: 36px;
  border-radius: 6px;
  justify-content: center;
  padding: 0px 15px;
  margin-left: 10px;
  i {
    color: #fff;
    font-size: 12px;
    margin-right: 2px;
  }
  .btn_download {
    border: none;
    background-color: transparent;
    font-weight: 600;
    font-size: 14px;
    color: #ffffff;
    margin-left: 5px;
    cursor: pointer;
  }
}
</style>