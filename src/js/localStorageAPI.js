const keyTasks = 'tasks';
export function addTask(data) {
  const tasks = JSON.parse(localStorage.getItem(keyTasks)) || [];
  tasks.push(data);
  localStorage.setItem(keyTasks, JSON.stringify(tasks));
}
