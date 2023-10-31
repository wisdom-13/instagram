type Props = {
  onClose: () => void;
};

export default function PostMenu({ onClose }: Props) {

  return (
    <div className='bg-white rounded-lg'>
      <ul className='text-sm text-center divide-y divide-slate-200 flex-col cursor-pointer'>
        <li className='leading-[40px] text-red-500 font-bold'>삭제</li>
        <li className='leading-[40px]'>수정</li>
        <li className='leading-[40px]'><button className='w-full' onClick={onClose}>취소</button></li>
      </ul>
    </div>
  );
}

