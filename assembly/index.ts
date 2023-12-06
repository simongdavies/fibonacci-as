export function CalcFib(n: i32): i32 {
  var a:i32 = 0, b:i32 = 1
  if (n <= 0) {
    return 0
  }
  while (--n) {
    let t = a + b
    a = b
    b = t
  }
  return b
}
