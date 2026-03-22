/** スキーマのバージョン */
type SchemaVersion = 1;

// ── 共通のベース型 ────────────────────────────────────────

interface ProcessBase {
  label?: string;
  enabled: boolean;
}

// ── 各プロセスの型 ──────────────────────────────────────

interface ReplaceProcess extends ProcessBase {
  type: "replace";
  from: string;
  to: string;
  useRegex: boolean;
}

interface HalfToFullProcess extends ProcessBase {
  type: "half-to-full";
  target: ConvertTarget;
}

interface FullToHalfProcess extends ProcessBase {
  type: "full-to-half";
  target: ConvertTarget;
}

interface ConvertTarget {
  number: boolean;
  space: boolean;
  symbol: boolean;
}

// ── Union型 ──────────────────────────────────────────────

type Process = ReplaceProcess | HalfToFullProcess | FullToHalfProcess;

// ── ルートの型 ───────────────────────────────────────────

interface ReplacementSchema {
  schemaVersion: SchemaVersion;
  label: string;
  processes: Process[];
}

/**
 * テキストの整形
 *
 * @param text 整形前テキスト
 * @param config 整形設定
 * @returns 整形済みテキスト
 */
export const formatText = (text: string, config: ReplacementSchema): string => {
  console.log(config);
  return text.trim().toUpperCase();
};

export function sum(a: number, b: number) {
  return a + b;
}
