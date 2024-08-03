import styles from "./style.module.css"

const DynamicInput = ({ label, name, id, pattern, type, placeholder, onChange }) => {
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
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}

export default DynamicInput
