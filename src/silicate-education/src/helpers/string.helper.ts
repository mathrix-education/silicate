export function ucfirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function lcfirst(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
