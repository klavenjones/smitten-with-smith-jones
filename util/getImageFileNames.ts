export async function getImageFilenames(directoryPath: string): Promise<string[]> {
  const res = await fetch(directoryPath);
  const data = await res.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(data, 'text/html');
  const links = Array.from(doc.querySelectorAll('a'));
  //@ts-ignore
  const filenames = links.map(link => link.getAttribute('href')).filter(href => /\.(jpg|jpeg|png|svg)$/.test(href));
  //@ts-ignore
  return filenames;
}
