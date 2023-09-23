<script setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

const Route = useRoute();
const Router = useRouter();

function submitData() {
  Router.push("/store/details");
}
</script>

<template>
  <section class="fetch-sup position-relative bg-white">
    <div class="body parent-form">
      <div class="content">
        <h4>{{ Route.name }}</h4>
        <form @submit.prevent="submitData" class="form">
          <div class="form-floating mb-3">
            <select
              placeholder="البحث عن طريق"
              name=""
              class="form-control type"
            >
              <option value="">كود الصنف</option>
              <option value="">اسم الصنف الصنف</option>
            </select>
            <label> اختر نوع البحث </label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="text"
              placeholder="أدخل كود او اسم الصنف"
              class="form-control"
            />
            <label> ادخل كود الصنف </label>
          </div>

          <button class="btn btn-primary m-auto">بحث</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.content {
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  background-color: #f7f7f7;
  padding: 25px 15px;
  border-radius: 5px;
  box-shadow: var(--mainShadow);

  h4 {
    font-family: var(--fontFamily);
    padding: 15px 0;
    font-size: 21px;
    color: #222;
  }
  .form {
    .form-group {
      margin-bottom: 20px;
      .form-control {
        height: 43px;
        border-radius: 5px;
        font-family: var(--fontFamily);
        &::placeholder {
          font-size: 16px;
          font-family: var(--fontFamily);
        }
        &:focus {
          box-shadow: none;
          border: 1px solid var(--secondColor);
        }
      }
    }

    .btn {
      color: #fff;
      background-color: #337ab7;
      border-color: #2e6da4;
      min-width: 120px;
      margin: auto;
      display: inherit;
      font-size: 16px;
      font-family: var(--fontFamily);
    }
  }
}
</style>
