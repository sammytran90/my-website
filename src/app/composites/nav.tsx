'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu} from '@headlessui/react';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import { signIn, signOut } from 'next-auth/react';
// import Image from 'next/image';

const routesMap = [
  { name: 'Home', href: '/' },
  { name: 'AR Game', href: '/ar-game' },
  { name: 'Blog', href: '/blog' }
];

export function Navigation() {
  const pathName = usePathname();

  return (
    <Menu>
      {routesMap.map((route) => (
        <Link
          key={route.name}
          className={pathName.startsWith(route.href) ? "text-blue" : "text-black"}
          href={route.href}>
          {route.name}
        </Link>
      ))}
    </Menu>
  )
}
