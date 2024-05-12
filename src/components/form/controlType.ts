export type ControlType = {
  id: number;
  name: string;
  type: string;
  dataType: string | undefined;
  value?: string | number | undefined;
  range?: (number | string)[] | undefined;
  label?: string;
  autoComplete?: string | undefined;
  readonly?: boolean | undefined;
};
