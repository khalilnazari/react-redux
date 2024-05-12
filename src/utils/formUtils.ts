export function mapDataToControls<Data extends {}, Controls>(
  data: Data,
  controls: Controls[]
) {
  const arr = controls.map((control: Controls) => {
    Object.keys(data).map((key) => {
      // @ts-ignore
      if (control.name === key) {
        // @ts-ignore
        control.value = data[key];
      }
    });

    return control;
  });

  return arr;
}

export function isFormDataChanged<T extends {}>(
  currData: T,
  newData: T
): boolean {
  const postStr: string[] = [];
  const formStr: string[] = [];

  Object.keys(currData).forEach((curr) => {
    Object.keys(newData).forEach((newDataKey) => {
      if (curr === newDataKey) {
        // @ts-ignore
        postStr.push(currData[curr]);
        // @ts-ignore
        formStr.push(newData[newDataKey]);
      }
    });
  });

  if (postStr.join("") === formStr.join("")) {
    return false;
  }
  return true;
}
