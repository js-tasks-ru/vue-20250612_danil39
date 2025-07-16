import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const num1 = ref(0);
    const num2 = ref(0);
    const operation = ref("");

    return {
      num1, 
      num2, 
      operation
    }
  },

  methods: {
    doOperation(a, operation, b) {
      if (operation === "sum") {
        return a + b;
      } else if (operation === "subtract") {
        return a - b;
      } else if (operation === "multiply") {
        return a * b;
      } else {
        return a / b;
      }
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="num1"/>

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="operation"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="operation"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="operation"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="operation"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="num2"/>

      <div>=</div>

      <output>{{ doOperation(num1, operation, num2) }}</output>
    </div>
  `,
})
