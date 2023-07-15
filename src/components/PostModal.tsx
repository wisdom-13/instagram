import CloseIcon from "./ui/icons/CloseIcon";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
}

export default function PostModal({ onClose, children }: Props) {
  return (
    <section
      className='fixed top-0 left-0 w-full h-full bg-neutral-900/70 flex flex-col justify-center items-center z-50'
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}>
      <button className='fixed top-0 right-0 p-8 text-white' onClick={() => onClose()}><CloseIcon /></button>
      <div className="w-2/3 h-[calc(100vh-4rem)] max-w-7xl max-h-7xl">
        {children}
      </div>
    </section>
  );
}

