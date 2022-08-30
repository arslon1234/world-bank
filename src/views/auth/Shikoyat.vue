<template>
  <div class="Shikoyat">
    <span>{{ $t("RegisterOfComplaints") }}</span>
    <div class="tables">
      <div class="table_top">
        <input type="text" v-bind:placeholder="$t('Keyword')" />
        <input type="text" v-bind:placeholder="$t('TIN_PINFL')" />
        <select>
          <option disabled selected hidden value="">{{ $t("SelectStatus") }}</option>
          <option value="1">Categegory A</option>
          <option value="1">Categegory B</option>
        </select>
        <button>{{$t("Search")}}</button>
      </div>
      <table class="table table-bordered table-striped table-hover border-right-2">
        <thead style="border-radius: 7px">
          <tr>
            <th>№</th>
            <th>{{$t("ComplaintNumber")}}</th>
            <th>{{$t("Applicant'sName")}}</th>
            <th>{{$t("FaceShape(legal/physical)")}}</th>
            <th>{{$t("TIN_PINFL")}}</th>
            <th>{{$t("ReceiptDate")}}</th>
            <th>{{$t("Date_time_review")}}</th>
            <th>{{$t("ConsiderationAddress")}}</th>
            <th>{{$t("Status")}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>23465</td>
            <td style="width: 35%">ООО «ЗАМОН ТЕХНОЛОГИЯЛАРИ» </td>
            <td>Юр. лицо</td>
            <td>965963996</td>
            <td>15.10.2021</td>
            <td>Новый</td>
            <td>15.10.2021</td>
            <td>Новый</td>
          </tr>
          <tr>
            <td>1</td>
            <td>23465</td>
            <td>ООО «ЗАМОН ТЕХНОЛОГИЯЛАРИ»</td>
            <td>Юр. лицо</td>
            <td>965963996</td>
            <td>15.10.2021</td>
            <td>Новый</td>
            <td>15.10.2021</td>
            <td>Новый</td>
          </tr>
          <tr>
            <td>1</td>
            <td>23465</td>
            <td>ООО «ЗАМОН ТЕХНОЛОГИЯЛАРИ»</td>
            <td>Юр. лицо</td>
            <td>965963996</td>
            <td>15.10.2021</td>
            <td>Новый</td>
            <td>15.10.2021</td>
            <td>Новый</td>
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
  background-color: #F3F7F9;
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
  .Shikoyat span{
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
/* ::-webkit-scrollbar {
    display: none;
} */
.Shikoyat .tables .table_top button {
  width: 73px;
  height: 36px;
  background: #1778d0;
  border-radius: 6px;
  margin: 0px 6px;
  font-weight: 600;
  font-size: 14px;
  border: none;
  color: #ffffff;
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