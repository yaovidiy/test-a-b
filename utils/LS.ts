export const LSget = (name: string) => {
  const item = localStorage.getItem(name);

  if (!item) {
    return null;
  }

  return JSON.parse(item);
}

export const LSsset = (name: string, payload: any) => {
  const stringifyPayload = JSON.stringify(payload);

  localStorage.setItem(name, stringifyPayload);
}