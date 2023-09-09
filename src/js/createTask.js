export function createTask(event) {
  const task = {};
  new FormData(event.currentTarget).forEach((value, name) => {
    task[name] = value;
  });
  return task;
}
