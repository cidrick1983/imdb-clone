'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function NavBarItem({ title, param }) {
  const searchparams = useSearchParams();
  const genre = searchparams.get('genre');
  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-600 font-medium p-2 ${
          genre &&
          genre === param &&
          'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg font-extrabold'
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavBarItem;
