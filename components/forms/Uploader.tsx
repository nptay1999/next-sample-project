import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import Dropzone from 'react-dropzone';

import UploadedItem from './UploadedItem';

interface Props {
  multiple?: boolean;
}

const Uploader = ({ multiple }: Props) => {
  const [files, setFiles] = React.useState<File[]>([]);
  const id = React.useId();
  const handelAcceptedFiles = (acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    setFiles((listFiles) => [...listFiles, ...acceptedFiles]);
  };
  const removeFile = (file: File) => {
    setFiles((listFiles) => {
      return listFiles.filter((f) => {
        return !(f.name === file.name && f.size === f.size);
      });
    });
  };
  return (
    <div className="w-full rounded-lg shadow-lg p-8">
      <label
        htmlFor={id}
        className="block font-bold text-2xl text-emerald-500 mb-2"
      >
        Upload Files
      </label>
      <div className="font-light text-sm text-gray-400 mb-6">
        Upload documents you want to share with your team
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Dropzone onDrop={handelAcceptedFiles} multiple={multiple}>
          {({ getRootProps, getInputProps }) => (
            <div
              className="border-2 border-gray-300 border-dashed rounded-lg flex flex-col items-center justify-center gap-3 text-emerald-500 py-10 cursor-pointer max-h-[20rem]"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <FontAwesomeIcon
                icon={faUpload}
                className="text-5xl text-gray-300"
              />
              <span className="text-xs font-normal">
                Drag and drop files here
              </span>
              <h2 className="font-normal text-sm"> - Or - </h2>
              <button className="rounded-lg bg-emerald-500 text-gray-100 text-xs font-light px-10 py-3 transition active:opacity-80 active:scale-95 hover:opacity-80">
                Browes Files
              </button>
            </div>
          )}
        </Dropzone>

        <div className="flex flex-col items-stretch gap-3">
          <h2 className="font-bold text-xl">Uploaded Files</h2>
          {files &&
            files.map((file) => (
              <UploadedItem
                key={file.name + file.size}
                file={file}
                remove={() => removeFile(file)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Uploader;
