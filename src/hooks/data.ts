import { useState } from "react";

/**
 * @description helpful in situations where you want to manage an array of data
 */
export default function useArray(defaultValue: any[]) {
  const [array, setArray] = useState(defaultValue);

  function push(element: any) {
    setArray((a) => [...a, element]);
  }

  function filter(callback: any) {
    setArray((a) => a.filter(callback));
  }

  function update(index: number, newElement: any) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ]);
  }

  function remove(index: number) {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  }

  function clear() {
    setArray([]);
  }

  return { array, set: setArray, push, filter, update, remove, clear };
}

/**
 * @returns [value, toggleValue]
 * @description allows a component to toggle a value between true and false
 */
export function useToggle(defaultValue: any) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value: any) {
    setValue((currentValue: any) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [value, toggleValue];
}
