export const cn = (...classes: (string | undefined | null | boolean)[]) => {
  return classes.filter(Boolean).join(' ')
}

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const generateGradient = (colors: string[]) => {
  return `linear-gradient(135deg, ${colors.join(', ')})`
}
