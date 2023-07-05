type Props = {
  image?: string | null;
  size?: 'small' | 'normal';
  highlight?: boolean;
};

export default function Avatar({ image, size = 'normal', highlight = false }: Props) {
  return (
    <div className={getcontainerStyle(size, highlight)}>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img alt='user profile' className={getImageStyle(highlight)} src={image ?? undefined} referrerPolicy='no-referrer' />
    </div>
  );
}

function getcontainerStyle(size: string, highlight: boolean): string {
  const baseStyle = 'rounded-full group-hover:scale-105';
  const sizeStyle = size === 'small' ? 'w-6 h-6' : 'w-[66px] h-[66px]';
  const highlightStyle = highlight ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem]' : '';
  return `${baseStyle} ${sizeStyle} ${highlightStyle}`;
}

function getImageStyle(highlight: boolean): string {
  const baseStyle = 'rounded-full object-cover w-full h-full';
  const highlightStyle = highlight ? 'bg-white p-[0.15rem]' : '';
  return `${baseStyle} ${highlightStyle}`;
}
