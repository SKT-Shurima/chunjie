export const fileDownload = (url: string, title?: string) => {
  const aObj = document.createElement('a');
  if (title) {
    aObj.download = title;
  }

  aObj.style.display = 'none';
  aObj.href = url;
  document.body.appendChild(aObj);
  aObj.click();
  document.body.removeChild(aObj);
};
