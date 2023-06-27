type Props = {
  image?: string | null;
  size?: 'small' | 'normal';
};

export default function Avatar({ image, size = 'normal' }: Props) {
  return (
    <div className={getcontainerStyle(size)}>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img alt='user profile' className='rounded-full ' src={image ?? undefined} referrerPolicy='no-referrer' />
    </div>
  );
}

function getcontainerStyle(size: string): string {
  const baseStyle = 'rounded-full mr-3 group-hover:scale-105';
  const sizeStyle = size === 'small' ? 'w-6 h-6' : 'w-12 h-12';
  return `${baseStyle} ${sizeStyle}`;
}