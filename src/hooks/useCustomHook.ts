import { useState, useEffect } from 'react';

const useCustomHook = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    console.log('Value changed:', value);
  }, [value]);

  return [value, setValue] as const;
};

export default useCustomHook;
