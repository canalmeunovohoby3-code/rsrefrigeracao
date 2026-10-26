import { Wind } from 'lucide-react'
import { iconMap } from '../lib/icons'

export default function Icon({ name, size = 22, strokeWidth = 1.7, ...props }) {
  const Component = iconMap[name] || Wind
  return <Component size={size} strokeWidth={strokeWidth} aria-hidden="true" {...props} />
}
