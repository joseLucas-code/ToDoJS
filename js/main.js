const todoInput = document.querySelector('#text-new-item')
const addBtn = document.querySelector('.js-add')
const listContainer = document.querySelector('.js-list-container')
const remaing = document.querySelector('.remaing')

const todo = {
    update(value){
        const li = document.createElement('li')
        const p = document.createElement('p')
        const i = document.createElement('i')
        li.classList.add('item-single')
        p.classList.add('item-name')
        i.classList.add('fas','fa-times')


        listContainer.appendChild(li)
        li.appendChild(p)
        li.appendChild(i)
        p.innerText = value
        todoInput.value = '';
        remaing.innerText = 28

        todoInput.focus()

        i.addEventListener('click', function(){
            listContainer.removeChild(li)
        })

        li.addEventListener('click', ()=>{
            li.classList.toggle('check')
        })
    }
}

addBtn.addEventListener('click', function(){
    if(todoInput.value.length === 0 || todoInput.value.length >= 28){
        alert('Proibido adicionar item vazio ou com mais de 28 caracteres')
    }else{
        todo.update(todoInput.value)
    }

})

todoInput.addEventListener('keyup', (e)=>{
    
    if(e.keyCode === 13){
        todo.update(todoInput.value)
    }

    todoInput.value.length > 28 ? remaing.innerText = '0' : remaing.innerText = 28 - todoInput.value.length
})

