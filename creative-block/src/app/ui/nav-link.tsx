import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
 
export default function NavLink({
  user,
  children,
}: {
  user: string
  children: React.ReactNode
}) {
  const segment = useSelectedLayoutSegment()
  const isActive = user === segment
 
  return (
    <Link
      href={`/profile/${user}`}
      // Change style depending on whether the link is active
      style={{ fontWeight: isActive ? 'bold' : 'normal' }}
    >
      {children}
    </Link>
  )
}