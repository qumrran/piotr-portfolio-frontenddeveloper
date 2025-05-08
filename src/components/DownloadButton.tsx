import React from 'react';
import { IoMdDownload } from 'react-icons/io';
import { DownloadButtonProps } from '../interfaces';



const DownloadButton: React.FC<DownloadButtonProps> = ({ filePath, label }) => {
  return (
    <a
      href={filePath}
      download
      className="inline-flex items-center bg-black text-white hover:bg-gray-800 px-3 py-1.5 transition-colors gap-1.5 font-roboto-condensed mt-2 w-auto"
      aria-label="Pobierz CV"
    >
      <IoMdDownload className="text-xl text-white" />
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
};

export default DownloadButton;
