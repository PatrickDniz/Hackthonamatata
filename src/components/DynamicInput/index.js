import styles from "./style.module.css"

const DynamicInput = ({ label, name, id, pattern, type, placeholder }) => {
  return (
    <div>
      <label 
        className={styles.label}
        htmlFor={id}
      >
        {label}
      </label>
      <input 
        className={styles.input}
        type={type} 
        name={name} 
        id={id} 
        pattern={pattern}
        placeholder={placeholder}
        aria-required="true"
        required
      />
    </div>
  )
}

export default DynamicInput