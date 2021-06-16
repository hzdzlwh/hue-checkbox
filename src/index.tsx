import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
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
    disabled,
    color = '#1890ff',
    ...restProps
  }
) => {
  
  const [innerChecked, setInnerChecked] = useState(checked || defaultChecked)
  const innerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (innerRef.current !== null) {
      innerRef.current.style.backgroundColor = color
      innerRef.current.style.opacity = '0.15'
    }
  }, [])

  useEffect(() => {
    setInnerChecked(checked)
  }, [checked])

  useEffect(() => {
    if (innerRef.current !== null) {
      innerRef.current.style.opacity = innerChecked ? '1' : '0.15'
    }
  }, [innerChecked])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    if (checked === undefined) {
      setInnerChecked(e.target.checked)
    }
    if (onChange) {
      onChange(e)
    }
  }

  const classString = classNames('hue-checkbox', {
    [`hue-checkbox-checked`]: innerChecked,
    [`hue-checkbox-disabled`]: disabled,
  });

  return (
    <label className="hue-checkbox-wrapper">
      <span className={classString}>
        <input type="checkbox" disabled={disabled} className="input" checked={!!innerChecked} onChange={handleChange} />
        <span ref={innerRef} className="checkbox-inner"></span>
      </span>
      {children !== undefined && <span >{children}</span>}
    </label>
  )
}

export default Checkbox