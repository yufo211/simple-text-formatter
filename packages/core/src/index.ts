/**
 * テキストの整形
 *
 * @param text 整形前テキスト
 * @param config 整形設定
 * @returns 整形済みテキスト
 */
export const formatText = (text: string, config: object): string => {
  return text.trim().toUpperCase();
};

export function sum(a: number, b: number) {
  return a + b;
}
