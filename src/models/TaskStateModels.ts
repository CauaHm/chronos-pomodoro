import type { TaskModels } from "./TaskModels"

export type TaskStateModels = {
  tasks: TaskModels[];
  secondsRemaining: number;
  formattedSecondsReamining: string;
  activeTask: TaskModels | null;
  currentCycle: number 
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  }
}