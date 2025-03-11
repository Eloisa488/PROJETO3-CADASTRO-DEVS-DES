const form = document.getElementById("orderForm")

form.addEventListener("submit", function (ev) {
  // ==========================================================================
  // ==========================================================================
  // Esse método preventDefault() fará com que a página não seja recarregada!!!  
  // ==========================================================================
  // ==========================================================================
  ev.preventDefault()

  // querySelector é uma outra forma de seletor. Você pode usar os outros seletores por id que foi passado tanto quanto este!
  const name = document.querySelector("input[name='name']").value
  const address = document.querySelector("input[name='address']").value
  const breadType = document.querySelector("select[name='breadType']").value
  const main = document.querySelector("input[name='main']").value
  const observations = document.querySelector("textarea[name='observations']").value

  let salad = ""
  document.querySelectorAll("input[name='salad']:checked").forEach(function (item) {
    salad += " - " + item.value + "\n"
  })

  console.log({
  })

  alert(
    
  )
})
 