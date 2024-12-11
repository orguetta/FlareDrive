import { Image, FileAudio, FileVideo, File, FileCode, FileArchive, FileText, Folder, FilePdf } from 'lucide-react';

function MimeIcon({ contentType }: { contentType: string }) {
  const fallbackIcon = <File size={36} />;
  if (typeof contentType !== "string") return fallbackIcon;

  return contentType.startsWith("image/") ? (
    <Image size={36} />
  ) : contentType.startsWith("audio/") ? (
    <FileAudio size={36} />
  ) : contentType.startsWith("video/") ? (
    <FileVideo size={36} />
  ) : contentType === "application/pdf" ? (
    <FilePdf size={36} />
  ) : ["application/zip", "application/gzip"].includes(contentType) ? (
    <FileArchive size={36} />
  ) : contentType.startsWith("text/") ? (
    <FileCode size={36} />
  ) : contentType === "application/x-directory" ? (
    <Folder size={36} />
  ) : (
    fallbackIcon
  );
}

export default MimeIcon;
