
const createToDo = (title, form, list) => {
	const todoContainer = document.createElement('div');
	const todoRow = document.createElement('div');
	const todoHeader = document.createElement('h1');
	const wrapperForm = document.createElement('div');
	const wrapperList = document.createElement('div');

	todoContainer.classList.add('container');
	todoRow.classList.add('row');
	todoHeader.classList.add('text-center', 'mb-5');
	wrapperForm.classList.add('col-6');
	wrapperList.classList.add('col-6');

	todoHeader.textContent = title;

	wrapperForm.append(form);
	wrapperList.append(list)
	todoRow.append(wrapperForm, wrapperList);
	todoContainer.append(todoHeader, todoRow);
	return todoContainer;
};

const createFormTodo = () => {
	const form = document.createElement('form');
	const input = document.createElement('input');
	const textArea = document.createElement('textarea');
	const btnSubmit = document.createElement('button');

	input.placeholder = 'Наименование';
	textArea.placeholder = 'Описание';

	btnSubmit.textContent = 'Добавить';
	btnSubmit.type = 'submit';

	form.classList.add('form-group');
	input.classList.add('form-control', 'mb-3');
	textArea.classList.add('form-control', 'mb-3');
	btnSubmit.classList.add('btn', 'btn-primary', 'btn-lg', 'btn-block')

	form.append(input, textArea, btnSubmit);
	return { input, textArea, btnSubmit, form };
};

const createListTodo = () => {
	const listTodo = document.createElement('ul');
	listTodo.classList.add('list-group');
	return listTodo;
};

const createItemTodo = (id, titleItem) => {
	const itemTodo = document.createElement('li');
	const btnItem = document.createElement('button');

	itemTodo.classList.add('list-group-item', 'p-0', 'mb-3', 'border-0');
	btnItem.classList.add('btn', 'btn-light', 'btn-block', 'border-primary', 'rounded-pill')
	btnItem.textContent = titleItem;
	btnItem.id = id;
	itemTodo.append(btnItem);

	return itemTodo;
};

const addTodoItem = (todoData, listTodo, nameTodo, descriptionTodo) => {
	const id = `todo${(+new Date()).toString(16)}`;
	const itemTodo = createItemTodo(id, nameTodo);

	todoData.push({ id, nameTodo, descriptionTodo });

	listTodo.append(itemTodo);
	console.log(todoData);
};

const createModal = () => {
	const modal = document.createElement('div');
	modal.innerHTML = `
	<div class="modal-dialog">
		<div class="modal-content">
			<h2 class="modal-header">${}</h2>
			
		</div>
	</div> 
	`;
};

const initTodo = (selector, titleTodo) => {
	const todoData = [];

	const wrapper = document.querySelector(selector);
	const formTodo = createFormTodo();
	const listTodo = createListTodo();

	const todoApp = createToDo(titleTodo, formTodo.form, listTodo);

	wrapper.append(todoApp);

	formTodo.form.addEventListener('submit', event => {
		event.preventDefault();

		formTodo.input.classList.remove('is-invalid');
		formTodo.textArea.classList.remove('is-invalid');

		if (formTodo.input.value && formTodo.textArea.value) {
			addTodoItem(todoData, listTodo, formTodo.input.value, formTodo.textArea.value)
			formTodo.form.reset();
		}
		else {
			if (!formTodo.input.value) {
				formTodo.input.classList.add('is-invalid');
			}
			if (!formTodo.textArea.value) {
				formTodo.textArea.classList.add('is-invalid');
			}
		}
	})
}

initTodo('.app', 'Список дел');