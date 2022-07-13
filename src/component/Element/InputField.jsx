import React from "react";

import { ClearAll } from "@mui/icons-material";

export default function InputField(props) {

    const [value, setValue] = React.useState('');
    const [Icon, setIcon] = React.useState(<></>);
    const [parentClass, setParentClassname] = React.useState(props.parentClass);
    const [placeholder, setPh] = React.useState(props.placeholder);

    const getInputValue = (event) => {
        setValue(event.target.value);
    }
    const handleIcon = () => {
        setParentClassname(props.parentClass)
        setIcon(<></>)
    }
    const handleBlur = () => {
        console.dir(props)
        if (props.name === 'email') {
            if (value.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                setParentClassname(props.parentClass + ' alert-validate')
                setIcon(<span className="btn-hide-validate" onClick={handleIcon}><ClearAll /></span>)
                props.handleValidate(false)
            }
            else {
                props.handleValidate(true)
                setParentClassname(props.parentClass + ' true-validate')
            }
        } else if (props.name === 'phone')
            setPh('Enter Number Phone')
        else
            if (value.trim() === '') {
                setParentClassname(props.parentClass + ' alert-validate')
                setIcon(<span className="btn-hide-validate" onClick={handleIcon}><ClearAll /></span>)
                props.handleValidate(false)
            }
            else {
                props.handleValidate(true)
                setParentClassname(props.parentClass + ' true-validate')
            }
    }
    const handleFocus = () => {
        handleIcon()
        setParentClassname(props.parentClass)
    }
    return (
        <div className={parentClass} data-validate={props.data_validate}>
            <span className="label-input">{props.label}</span>
            <input
                onChange={getInputValue}
                onBlur={handleBlur}
                onFocus={handleFocus}
                required
                className={props.className}
                type={props.type}
                name={props.name}
                placeholder={placeholder} />
            {/* <Icon /> */}
        </div>
    )
}