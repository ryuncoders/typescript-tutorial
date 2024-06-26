interface Config {
  name: string;
  debug: boolean;
}

declare module "test" {
  function init(config: Config): boolean;
  function exit(num: Number): Number;
}
