import { createContext, useContext } from "react";

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

export function useTasks() {
  return useContext(TaskContext);
}

export function useTasksDispatch() {
  return useContext(TaskDispatchContext);
}
