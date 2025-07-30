import './styles/theme.css';
import './styles/global.css';

import { Home } from './pages/Home';
import { useState } from 'react';
import type { TaskStateModels } from './models/TaskStateModels';

const initialState: TaskStateModels = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsReamining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  }
  
}

export function App() {
  const [state, setState] = useState(initialState)
  return (
    <>
      <Home />
    </>
  );
}
