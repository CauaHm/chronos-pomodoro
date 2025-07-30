import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import type { TaskStateModels } from '../../models/TaskStateModels';
import { MainTemplate } from '../../templates/MainTemplate';

type HomeProps = {
  state: TaskStateModels;
  setState: React.Dispatch<React.SetStateAction<TaskStateModels>>;
};

export function Home(proprs: HomeProps) {
  console.log(proprs)
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
