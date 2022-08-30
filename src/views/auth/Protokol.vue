<template>
  <div class="Shikoyat">
    <span>{{ $t("RegistryOfProtocols") }}</span>
    <div class="tables">
      <div class="table_top">
        <input type="text" v-bind:placeholder="$t('Keyword')" />
        <input type="text" v-bind:placeholder="$t('TIN_PINFL')" />
        <button>{{ $t("Search") }}</button>
      </div>
      <table
        class="table table-bordered table-striped table-hover border-right-2"
      >
        <thead style="border-radius: 7px">
          <tr>
            <th>№</th>
            <th>{{ $t("ComplaintNumber") }}</th>
            <th>{{ $t("Applicant'sName") }}</th>
            <th>{{ $t("ContactNumber") }}</th>
            <th>{{ $t("FaceShape(legal/physical)") }}</th>
            <th>{{ $t("Number_data_protocol") }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>23465</td>
            <td style="width: 35%">ООО «ЗАМОН ТЕХНОЛОГИЯЛАРИ»</td>
            <td>+99893 123 45 67</td>
            <td>Физ. лицо</td>
            <td>154 / 154 от 18.02.2022</td>
          </tr>
          <tr>
            <td>1</td>
            <td>23465</td>
            <td style="width: 35%">ООО «ЗАМОН ТЕХНОЛОГИЯЛАРИ»</td>
            <td>+99893 123 45 67</td>
            <td>Физ. лицо</td>
            <td>154 / 154 от 18.02.2022</td>
          </tr>
          <tr>
            <td>1</td>
            <td>23465</td>
            <td style="width: 35%">ООО «ЗАМОН ТЕХНОЛОГИЯЛАРИ»</td>
            <td>+99893 123 45 67</td>
            <td>Физ. лицо</td>
            <td>154 / 154 от 18.02.2022</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto";
  font-style: normal;
}
.Shikoyat {
  width: 100%;
  height: 100vh;
  background-color: #f3f7f9;
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
}
.Shikoyat span {
  font-weight: 600;
  font-size: 25px;
  color: #272a2c;
  margin: 10px 0px 10px 15px;
}
@media (max-width: 765px) {
  .Shikoyat span {
    font-size: 20px;
  }
}
.Shikoyat .tables {
  width: 98%;
  height: 98%;
  background-color: #fff;
  margin-left: 1%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow: auto;
}
.Shikoyat .tables .table_top {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.Shikoyat .tables .table_top input,
select {
  width: 250px;
  height: 36px;
  background: #ffffff;
  border: 1px solid #e1eaed;
  border-radius: 8px;
  outline: none;
  margin: 3px 6px;
  font-weight: 400;
  font-size: 14px;
  color: #8da2ad;
  padding-left: 10px;
}
.Shikoyat .tables .table_top button {
  width: 73px;
  height: 36px;
  background: #1778d0;
  border-radius: 6px;
  margin: 0px 6px;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  border: none;
}
.Shikoyat .tables table {
  width: 100%;
  margin-top: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: 400;
  font-size: 13px;
  color: #2a2c27;
  text-align: center;
}
table {
  border-collapse: collapse;
  border-radius: 7px;
  overflow: hidden;
}
</style>