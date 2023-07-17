document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    console.log(e.target.new-task-description.value);
    form.reset()
  });
});

function buildToDo(toDo) {
    const p = document.createElement('p')
    const btn = document.createElement('button')
    btn.addEventListener('click', deleteTodo)
    btn.textContent = 'X'
    p.appendChild(btn)
    p.textContent = `${toDo} `
    console.log(p)
    document.querySelector("#tasks").appendChild(p)
};

function deleteTodo(e){
    e.target.parentNode().remove()
};
