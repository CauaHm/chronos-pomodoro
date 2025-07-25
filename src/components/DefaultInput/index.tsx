import styles from './styles.module.css'

type DefaultInputProps = {
  labelText: string;
  id: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ labelText, id, type, ...rest}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest}/>
    </>
  );
}
