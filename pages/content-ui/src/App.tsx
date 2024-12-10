import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useStorage } from '@extension/shared';
import { exampleThemeStorage } from '@extension/storage';

export default function App() {
  const theme = useStorage(exampleThemeStorage);

  useEffect(() => {
    console.log('content ui loaded');
  }, []);

  console.log('theme', theme);

  return (
    <div className="flex items-center justify-between gap-2 rounded bg-blue-100 px-2 py-1">
      <div className="flex gap-1 text-blue-500">
        Edit <strong className="text-blue-700">pages/content-ui/src/app.tsx</strong> and save to reload.
      </div>
      <Button onClick={exampleThemeStorage.toggle}>Toggle Theme</Button>
    </div>
  );
}
