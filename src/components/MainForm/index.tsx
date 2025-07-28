import styles from './styles.module.css'

import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';

export function MainForm() {
  return(
    <form className={styles.form} action=''>
          <div className={styles.formRow}>
            <DefaultInput
              labelText='task'
              type='text'
              id='id'
              placeholder='Digite algo'
            />
          </div>
          <div className={styles.formRow}>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className={styles.formRow}>
            <Cycles />
          </div>
          <div className={styles.formRow}>
            <DefaultButton color='green' icon={<PlayCircleIcon />} />
          </div>
        </form>
  )
}