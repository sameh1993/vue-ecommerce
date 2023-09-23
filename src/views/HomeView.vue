<script setup>
import { defineProps, onMounted, ref } from "vue";
import Chart from "chart.js/auto";

const admin = ref(false);

onMounted(() => {
  const ctx = document.getElementById("barchart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "يناير",
        "فبراير",
        "مارس",
        "ابرايل",
        "مايو",
        "يونيو",
        "يوليو",
        "أغسطس",
        "سبتمبر",
        "أكتوبر",
        "نوفمبر",
        "ديسمبر",
      ],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3, 13, 3, 5, 2, 15, 5],
          borderWidth: 1,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
</script>

<template>
  <!-- admin options main content start-->
  <div v-if="admin" class="main-page">
    <div class="statistics">
      <div class="row">
        <div class="col-md-3">
          <div class="item">
            <div class="row">
              <div class="col-md-7">
                <p>عدد الفواتير</p>
                <h2 class="h1">321</h2>
              </div>
              <div
                class="col-md-5 d-flex justify-content-center align-items-center"
              >
                <i class="fa fa-bath" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="item">
            <div class="row">
              <div class="col-md-7">
                <p>ايرادات اليوم</p>
                <h2 class="h1">321</h2>
              </div>
              <div
                class="col-md-5 d-flex justify-content-center align-items-center"
              >
                <i class="fa fa-bath" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="item">
            <div class="row">
              <div class="col-md-7">
                <p>عدد المنتجات</p>
                <h2 class="h1">321</h2>
              </div>
              <div
                class="col-md-5 d-flex justify-content-center align-items-center"
              >
                <i class="fa fa-bath" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="item">
            <div class="row">
              <div class="col-md-7">
                <p>عدد الموردين</p>
                <h2 class="h1">321</h2>
              </div>
              <div
                class="col-md-5 d-flex justify-content-center align-items-center"
              >
                <i class="fa fa-bath" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- start charts.js -->

    <div class="chart">
      <!-- <h2 class="text-center">احصائيه الايرادات شهريا</h2>
      <div class="body">
        <canvas id="myChart"></canvas>
      </div> -->

      <div class="card text-center card_border mt-4">
        <div class="card-header chart-grid__header">احصائيه شهريه</div>
        <div class="card-body">
          <!-- bar chart -->
          <div id="container text-center">
            <canvas
              id="barchart"
              style="
                display: block;
                height: 320px;
                width: 100%;
                max-width: 800px;
                margin: auto;
              "
              width="800"
              height="400"
              class="chartjs-render-monitor"
            ></canvas>
          </div>
          <!-- //bar chart -->
        </div>
        <div class="card-footer text-muted chart-grid__footer">
          تم تحديثها منذ 1 دقيقه
        </div>
      </div>
    </div>
  </div>

  <!-- start user option -->
  <div v-else class="main-page">
    <div class="statistics">
      <div class="row">
        <div class="col-md-3">
          <div class="item">
            <div class="row">
              <div class="col-md-7">
                <p>عدد الفواتير</p>
                <h2 class="h1">321</h2>
              </div>
              <div
                class="col-md-5 d-flex justify-content-center align-items-center"
              >
                <i class="fa fa-bath" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="item">
            <div class="row">
              <div class="col-md-7">
                <p>ايرادات اليوم</p>
                <h2 class="h1">321</h2>
              </div>
              <div
                class="col-md-5 d-flex justify-content-center align-items-center"
              >
                <i class="fa fa-money" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="item">
            <div class="row">
              <div class="col-md-7">
                <p>عدد المنتجات</p>
                <h2 class="h1">321</h2>
              </div>
              <div
                class="col-md-5 d-flex justify-content-center align-items-center"
              >
                <i class="fa fa-product-hunt" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="item">
            <div class="row">
              <div class="col-md-7">
                <p>عدد الموردين</p>
                <h2 class="h1">321</h2>
              </div>
              <div
                class="col-md-5 d-flex justify-content-center align-items-center"
              >
                <i class="fa fa-users" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="body d-flex justify-content-center align-items-center">
      <div class="content text-center text-light">
        <img src="@/assets/images/invoice.png" />
        <button class="btn d-block ms-auto me-auto">
          <RouterLink to="/invoice/add"> انشىء فاتوره </RouterLink>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main-page {
  .statistics {
    & > .row .item {
      background: var(--secondColor);
      padding: 10px;
      i {
        font-size: 23px;
        background-color: #ccc;
        height: 45px;
        width: 45px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        justify-content: center;
        align-items: center;
        transform: scale(1.7) translate(7px);
      }

      .h1 {
        font-size: 54px;
        color: #f8f8f8;
        font-family: var(--fontFamily);
      }
      p {
        color: #fff;
        font-family: var(--fontFamily);
      }
    }
  }

  .card {
    .card-header {
      background-color: var(--secondColor);
      color: #fff;
      font-family: var(--fontFamily);
    }
    #barchart {
      margin: auto !important;
    }
  }

  .body {
    height: 430px;

    img {
      width: 120px;
    }
    .btn {
      min-width: 130px;
      background: var(--secondColor);
      color: #fff;
      font-size: var(--fontFamily);
      margin-top: 50px;
      margin-top: 20px;
      a {
        color: #fff;
      }

      &:hover {
        background-color: var(--secondColor);
      }
    }
  }
}
</style>
