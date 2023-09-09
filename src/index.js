/**
 * Створи список справ.
 * На сторінці є два інпути які має вводиться назва і текст задачі.
 * Після натискання на кнопку "Додати" завдання додається до списку #task-list.
 *
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Удалить</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 *
 * У кожної картки має бути кнопка "Видалити", щоб можна було
 * прибрати завдання зі списку.
 * Список із завданнями має бути доступним після перезавантаження сторінки.
 */
import { refs } from './js/refs';
import { createTask } from './js/createTask';
import { addTask } from './js/localStorageAPI';
refs.form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const task = createTask(event);
  addTask(task);
  renderTasks();
}

function renderTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const adc = tasks
    .map(item => {
      return `<li class="task-list-item">
     <button class="task-list-item-btn">Удалить</button>
      <h3>${item.taskName}</h3>
      <p>${item.taskText}</p>
  </li>`;
    })
    .join('');
  console.log(adc);
  refs.tasksList.innerHTML = adc;
}

renderTasks();
