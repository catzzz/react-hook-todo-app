import { useReducer, useEffect } from "react";

function useLocalStorageReducer(key, defaultVal, reducer) {
  // make piece of state , based of value in localstorage
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  //use useEfect to update localstorage
  return [state, dispatch];
}

export {useLocalStorageReducer};
