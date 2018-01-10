declare namespace NodeMacAppIcon {
  export type Options = {
    size: number;
    failOnError: boolean;
  };
  export type PidIcon = {
    pid: number;
    icon: Buffer;
  };
  export function getAppIconByPid(
    pid: number,
    options: Options
  ): Promise<Buffer>;
  export function getAppIconListByPid(
    pidList: number[],
    options: Options
  ): Promise<PidIcon[]>;
}

export = NodeMacAppIcon;
