type Props = {
  onDelete: () => void;
  onClose: () => void;
};

export default function DeleteConfirm({ onDelete, onClose }: Props) {

  return (
    <div className='w-[300px] bg-white rounded-lg'>
      <ul className='text-sm text-center divide-y divide-slate-200 flex-col cursor-pointer'>
        <li className='py-6'>
          <h3 className='text-xl'>게시물을 삭제할까요?</h3>
          <p className='text-gray-500 pt-2 text-xs'>이 게시물을 삭제하시겠어요?</p>
        </li>
        <li className='leading-[40px] text-red-500 font-bold'><button className='w-full' onClick={onDelete}>삭제</button></li>
        <li className='leading-[40px]'><button className='w-full' onClick={onClose}>취소</button></li>
      </ul>
    </div>
  );
}

