import { nanoid } from 'nanoid';
export function createTask(event) {
  const task = { id: nanoid() };
  new FormData(event.currentTarget).forEach((value, name) => {
    task[name] = value;
  });
  return task;
}
