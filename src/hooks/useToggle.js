import { useState } from "react";

function useToggle(defaultValue = "", toggleValue = "", name = "") {
    const [value, setValue] = useState(localStorage.getItem(`${name}`) || defaultValue);

    const onToggleChange = () => {
        setValue((prevValue) => {
            const newValue = prevValue === defaultValue ? toggleValue : defaultValue;
            localStorage.setItem(`${name}`, newValue);
            return newValue;
        });
    };

    return [value, onToggleChange];
}

export default useToggle;
