document.addEventListener("DOMContentLoaded", function () {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const resultSpan = document.getElementById("result");
  
    document.getElementById("add").addEventListener("click", function () {
      const result = parseFloat(num1Input.value) + parseFloat(num2Input.value);
      resultSpan.textContent = result;
    });
  
    document.getElementById("subtract").addEventListener("click", function () {
      const result = parseFloat(num1Input.value) - parseFloat(num2Input.value);
      resultSpan.textContent = result;
    });
  
    document.getElementById("multiply").addEventListener("click", function () {
      const result = parseFloat(num1Input.value) * parseFloat(num2Input.value);
      resultSpan.textContent = result;
    });
  
    document.getElementById("divide").addEventListener("click", function () {
      const result = parseFloat(num1Input.value) / parseFloat(num2Input.value);
      resultSpan.textContent = result;
    });
  });
  