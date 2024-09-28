import { renderHook } from '@testing-library/react-hooks';
import useNavbarStore from '@/components/NavBar/useNavbarStore';

describe('Test useNavbarStore', () => {
  test('It should have isOpen false', () => {
    const { result } = renderHook(() => useNavbarStore());

    console.log(result.current);
    expect(result.current.isOpen).toBe(undefined);
  });

  test('It should have isMobile undefined', () => {
    const { result } = renderHook(() => useNavbarStore());

    console.log(result.current);
    expect(result.current.isMobile).toBe(undefined);
  });
});
