<template>
  <div class="file">
    <i @click="HideImgModal" class="fa-solid fa-xmark"></i>
    <p>{{ $t("Attach_file") }}</p>
    <input
      type="text"
      v-model="store.state.file_name"
      placeholder="Fayl nomi"
    />
    <div class="actions">
      <UploadButton
        @click="
          HideFile_name();
          HideImgModal();
        "
        style="background-color: #ff6157"
        :text="$t('dont_need')"
      ></UploadButton>
      <UploadButton
        @click="
          HideFile_name();
          HideImgModal();
        "
        style="background-color: #30be76"
        :text="$t('save')"
      ></UploadButton>
    </div>
  </div>
</template>
<script setup>
import store from "@/store";
import UploadButton from "@/components/ui/UploadButton";
const props = defineProps({
  HideFile_name: {
    type: Function,
  },
  HideImgModal: {
    type: Function,
  },
});
</script>

<style scoped lang="scss">
.file {
  position: relative;
  max-height: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  i {
    position: absolute;
    right: 15px;
    cursor: pointer;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    letter-spacing: 0.3px;
    word-spacing: 0.4px;
  }
  input {
    width: 100%;
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 8px 8px;
    font-size: 14px;
    color: #252525;
    outline: none;
  }
  .actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-top: 20px;
    margin-bottom: 25px;
  }
}
</style>