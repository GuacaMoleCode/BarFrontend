export interface Script {
    name: string;
    src: string;
    srcType: string;
    loaded: boolean;
  }

export const ScriptStore: Script[] = [
    { name: 'slick', src: 'assets/js/slick.js', srcType: 'text/javascript', loaded: false },
    { name: 'custom', src: 'assets/js/custom.js', srcType: 'text/javascript', loaded: false },
];
