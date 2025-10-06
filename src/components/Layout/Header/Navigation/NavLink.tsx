import { NavLinks } from '@/types/navlink'
import clsx from 'clsx'
import { Link, usePathname } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

interface NavLinkProps {
  item: NavLinks;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ item, onClick }) => {
  const path = usePathname()
  const t = useTranslations()
  const itemLabelToPath = `/${item.label.toLowerCase().replace(/\s+/g, '-')}`

  const linkclasses = clsx(
    'py-2 sm:py-3 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white/40 rounded-full group-hover:text-primary transition-all duration-300',
    {
      '!text-primary': item.href === path,
      'text-primary': path.startsWith(itemLabelToPath),
    }
  )

  const liststyle = clsx(
    'w-0 h-0.5 bg-primary transition-all duration-300',
    {
      '!block w-4 sm:w-6 mr-2 sm:mr-4': item.href === path,
      'block w-4 sm:w-6 mr-2 sm:mr-4': path.startsWith(itemLabelToPath),
      'group-hover:block group-hover:w-4 sm:group-hover:w-6 group-hover:mr-2 sm:group-hover:mr-4': true,
    }
  )

  return (
    <li className='flex items-center group w-full py-1'>
      <div className={liststyle} />
      <Link href={item.href} className={linkclasses} onClick={onClick}>
        {t(`navigation.${item.label.toLowerCase()}`)}
      </Link>
    </li>
  )
}

export default NavLink
