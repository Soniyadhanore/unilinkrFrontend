/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import { forwardRef, useState, useEffect, cloneElement } from "react";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Radio } from "../Radio";
const RadioGroup = forwardRef(
  ({
    selectedValue,
    orientation = "horizontal",
    className,
    name,
    children,
    onChange,
    errors = [],
    ...restProps
  }) => {
    const [value, setValue] = useState(selectedValue);
    useEffect(() => {
      setValue(selectedValue);
    }, [selectedValue]);
    const handleChange = (event, val, isDisabled) => {
      if (isDisabled) return;
      setValue(val);
      onChange && onChange(val, event);
    };
    const childrens = React.Children.map(children, (child) => {
      if (child?.type === Radio) {
        return cloneElement(child, {
          value: child.props.value,
          name,
          checked: child.props.value === value,
          onChange: (e) =>
            handleChange(e, child.props.value, child.props.disabled),
          orientation,
          disabled: child.props.disabled,
        });
      }
      return child;
    });
    return (
      <>
        <div className={className} {...restProps}>
          {childrens}
        </div>
        <ErrorMessage errors={errors} />
      </>
    );
  }
);
export { RadioGroup };