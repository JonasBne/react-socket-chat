import { useEffect, useState } from 'react';

const PREFIX = 'react-socketio-chat-';

export default function useLocalStorageState(key: string, defaultValue: any) {
  const prefixedKey = PREFIX + key;

  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(prefixedKey);

    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage);
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(prefixedKey, JSON.stringify(state));
  }, [prefixedKey, state]);

  return [state, setState];
}
