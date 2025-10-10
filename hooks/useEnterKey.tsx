import { useEffect, RefObject } from 'react';

interface UseEnterKeyOptions {
  onEnter: () => void;
  disabled?: boolean;
  targetRef?: RefObject<HTMLInputElement | null>;
}

export const useEnterKey = ({
  onEnter,
  disabled = false,
  targetRef,
}: UseEnterKeyOptions) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && !disabled) {
        event.preventDefault();
        onEnter();
      }
    };

    const element = targetRef?.current || window;

    element.addEventListener('keydown', handleKeyDown as any);

    return () => {
      element.removeEventListener('keydown', handleKeyDown as any);
    };
  }, [onEnter, disabled, targetRef]);
};
