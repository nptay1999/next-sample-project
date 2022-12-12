import React from 'react';
import Image from 'next/image';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UploadedItem = ({ file, remove }: { file: File; remove: () => void }) => {
  const [preview, setPreview] = React.useState<boolean>(false);
  const togglePreview = () => setPreview((show) => !show);
  const fileUrl = URL.createObjectURL(file);
  const type = file.type.split('/')[0];
  let previewComponent = (
    <Image
      src={fileUrl}
      alt="uploaded image"
      width={16}
      height={9}
      layout="responsive"
    />
  );
  switch (type) {
    case 'video':
      previewComponent = <video src={fileUrl}></video>;
      break;
    default:
      previewComponent = (
        <Image
          src={fileUrl}
          alt="uploaded image"
          width={16}
          height={9}
          layout="responsive"
        />
      );
  }
  return (
    <>
      <div className="flex items-center gap-3 p-3 border rounded relative group">
        <div
          className="w-32 hover:opacity-80 cursor-pointer transition active:opacity-80 active:scale-95"
          onClick={togglePreview}
          aria-hidden
        >
          {previewComponent}
        </div>
        <div className="flex-1">
          <div className="font-light text-xs text-gray-500 flex items-center justify-between mb-2">
            <span>sample.jpg</span>{' '}
            <span className="text-emerald-500">completed</span>
          </div>
          <div className="h-2 bg-emerald-500 rounded animate-pulse"></div>
        </div>
        <div
          className={`absolute top-0 right-0 translate-x-[50%] -translate-y-[50%] flex items-center justify-center rounded-full w-7 h-7 bg-white cursor-pointer transition shadow active:scale-95 group opacity-0 group-hover:opacity-100`}
          onClick={remove}
          aria-hidden
        >
          <FontAwesomeIcon
            icon={faTimesCircle}
            className="text-red-400 text-base transition"
          />
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 w-screen h-screen items-center justify-center bg-gray-900/70 select-none z-50 ${
          preview ? 'flex animate-zoomin' : 'hidden'
        }`}
      >
        <div className="w-full max-w-6xl">{previewComponent}</div>
        <div
          className={`absolute top-5 right-5 flex items-center justify-center rounded-full w-10 h-10 bg-transparent cursor-pointer transition hover:bg-white hover:shadow-lg active:bg-white active:scale-95 group `}
          onClick={togglePreview}
          aria-hidden
        >
          <FontAwesomeIcon
            icon={faTimesCircle}
            className="text-white text-2xl transition group-hover:text-black group-active:text-black"
          />
        </div>
      </div>
    </>
  );
};

export default UploadedItem;
