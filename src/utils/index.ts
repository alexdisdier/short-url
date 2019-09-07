// Function to check if the url entered is of a conventional format
// source: https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
export const isValidURL = (str: string) => {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
};

// Source: https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
export const addTextToClipboard = async (url: string) => {
  const el = document.createElement("textarea");
  el.value = url;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};
