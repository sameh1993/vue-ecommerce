import { ref } from 'vue'
export default function useComp() {

  const reuseData = ref("Reusable data")
  function reuseMethod() {
    console.log(reuseData.value);
    console.log('Hello from Reusable method!')
  }
  return {
    reuseData,
    reuseMethod
  }
}