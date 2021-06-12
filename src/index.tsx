import React, { useState } from 'react'
import './index.less'


interface CheckboxProps {
  color?: string
  checked?: boolean
  defaultChecked?: boolean;
  disabled?: boolean
  style?: React.CSSProperties
  onChange?: (e: any) => void;
}

const Checkbox: React.FC<CheckboxProps> = (
  {
    checked,
    defaultChecked,
    children,
    onChange,
    ...restProps
  }
) => {
  
  const [innerChecked, setInnerChecked] = useState(checked || defaultChecked)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    setInnerChecked(e.target.checked)
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <label className="yx-checkbox-wrapper">
      <span>
        <input type="checkbox" checked={!!innerChecked} onChange={handleChange} />
        <span></span>
      </span>
      {children !== undefined && <span>{children}</span>}
    </label>
  )
}

export default Checkbox