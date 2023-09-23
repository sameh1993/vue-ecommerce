<script setup>
import { reactive } from "vue";
import { useRoute } from "vue-router";

const Route = useRoute();

const user = reactive({
  name: "",
});
</script>

<template>
  <section class="create-invoice position-relative">
    <div class="body">
      <div class="content bg-light">
        <h4>{{ Route.name }}</h4>
        <form class="form">
          <div class="form-group">
            <input
              type="text"
              placeholder="ادخل اسم المورد / الشركه"
              v-modal="user.name"
              class="form-control"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              placeholder="ادخل عنوان المورد / الشركه"
              v-modal="user.address"
              class="form-control"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              placeholder="ادخل اسم  مندوب "
              v-modal="user.agentName"
              class="form-control"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              placeholder="ادخل رقم ت مندوب "
              v-modal="user.agentPhone"
              class="form-control"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              placeholder="ادخل رقم2 مندوب "
              v-modal="user.agentPhone2"
              class="form-control"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              placeholder="ادخل رقم3 مندوب الشركه"
              v-modal="user.agentPhone3"
              class="form-control"
            />
          </div>

          <button class="btn btn-primary m-auto">حفظ</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.content {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  background-color: #fff;
  padding: 25px 15px;
  border-radius: 10px;

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
