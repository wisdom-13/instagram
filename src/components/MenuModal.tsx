type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function MenuModal({ onClose, children }: Props) {
  return (
    <section
      className='fixed top-0 left-0 w-full h-full bg-neutral-900/70 flex flex-col justify-center items-center z-50'
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}>
      <div className="w-[300px] max-w-7xl max-h-7xl">
        {children}
      </div>
    </section>
  );
}
