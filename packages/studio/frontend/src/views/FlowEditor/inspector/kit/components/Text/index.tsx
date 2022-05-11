import { TextArea } from '@blueprintjs/core'
import React, { FC, useState } from 'react'

import { SuperInput, SiTypes } from '~/src/components/SuperInput'

import * as layout from '../../../styles/layout.module.scss'
import { Label, DynamicBtn } from '../../shared/'

import * as style from './style.module.scss'

interface OwnProps {
  label?: string
  hint?: string
  multi?: boolean
  req?: boolean
  help?: string
  placeholder?: string
  error?: boolean
}

const NumberInput: FC<OwnProps> = ({ label, hint, req, placeholder, help, error, multi }) => {
  const [isDynamic, setIsDynamic] = useState(false)

  return (
    <div className={`${layout.paneItem} ${error ? style.error : ''}`}>
      <div className={layout.labelSection}>
        <Label className={layout.center} label={label} hint={hint} required />
        <DynamicBtn className={layout.rightBtn} active={isDynamic} onClick={() => setIsDynamic(!isDynamic)} />
      </div>
      {!isDynamic ? (
        multi ? (
          <TextArea className={style.textInput} />
        ) : (
          <input type="text" className={style.textInput} />
        )
      ) : (
        <SuperInput type={SiTypes.BOOL} />
      )}
    </div>
  )
}

export default NumberInput
