document.addEventListener("DOMContentLoaded", () => {
  const taskDesc = document.getElementById("new-task-description")
  const taskForm = document.getElementById("create-task-form")
  
  taskForm.addEventListener("submit", function(e){
    e.preventDefault()
    const ul = document.getElementById("tasks")
    let li = document.createElement("li")
    let button = document.createElement("button")
    button.innerHTML = "X"
    li.appendChild(document.createTextNode(taskDesc.value))
    li.appendChild(button)
    li.setAttribute("id", taskDesc.value) //taskDesc.value
    ul.appendChild(li)
    alert(`Added ${taskDesc.value} task`)

    button.addEventListener("click", function(e){
      li.remove()
    })
  })

});
