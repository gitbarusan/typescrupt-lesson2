/**型定義を共通で使用する */

/**
 * 補足
 * @types/から始まるライブラリを使用することでライブラリが
 * 提供するメソッドとかにも型定義が適用されるされる
 * .d.tsxのファイルがある場合は@types/から始まるライブラリをimportする必要がない
 */
export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
