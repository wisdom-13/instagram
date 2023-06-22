type Props = { image?: string | null };

export default function Avatar({ image }: Props) {
  return (
    <div className="w-6 h-6 rounded-full mr-3 group-hover:scale-105">
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img alt='user profile' className='rounded-full ' src={image ?? undefined} referrerPolicy='no-referrer' />
    </div>
  );
}