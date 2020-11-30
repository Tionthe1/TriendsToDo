
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

const createItemTodo = (titleItem) => {
	const itemTodo = document.createElement('li');
	const btnItem = document.createElement('button');

	itemTodo.classList.add('list-group-item', 'p-0', 'mb-3', 'border-0');
	btnItem.classList.add('btn', 'btn-light', 'btn-block', 'border-primary', 'rounded-pill')
	btnItem.textContent = titleItem;
	itemTodo.append(btnItem);

	return itemTodo;
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
			const itemTodo = createItemTodo(formTodo.input.value);
			listTodo.append(itemTodo);
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