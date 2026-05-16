// 简单的浏览器指纹生成
export function getFingerprint(): string {
  const data = [
    navigator.userAgent,
    navigator.language,
    screen.width.toString(),
    screen.height.toString(),
    screen.colorDepth.toString(),
    new Date().getTimezoneOffset().toString(),
    navigator.hardwareConcurrency?.toString() || '',
  ]
  return data.join('|')
}
