import Link from 'next/link';

function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-2xl sm:hidden" />
        <p className="hidden sm:inline">{title}</p>
      </Link>
    </div>
  );
}

export default MenuItem;
