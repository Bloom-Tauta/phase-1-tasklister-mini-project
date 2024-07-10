document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target.new_task_description.value)
    form.reset()
  });
});

function buildToDo(toDo) {
    const p = document.createElement('p')
    const btn = document.createElement('button')
    btn.addEventListener('click', deleteTodo);
    btn.textContent = 'X';
    
    p.textContent = `${toDo} `;
    p.appendChild(btn);
    document.querySelector("#tasks").appendChild(p)
};

function deleteTodo(e){
    e.target.parentNode.remove()
};
