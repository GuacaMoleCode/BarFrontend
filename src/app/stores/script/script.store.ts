export interface Script {
    name: string;
    src: string;
    srcType: string;
    loaded: boolean;
  }

export const ScriptStore: Script[] = [
  { name: 'jquery', src: 'assets/js/jquery.min.js', srcType: '', loaded: false },
  { name: 'bootstrap', src: 'assets/js/bootstrap.js', srcType: '', loaded: false },
  { name: 'slick', src: 'assets/js/slick.js', srcType: 'text/javascript', loaded: false },
  { name: 'counter', src: 'assets/js/simple-animated-counter.js', srcType: 'text/javascript', loaded: false },
  { name: 'jquery-popup', src: 'assets/js/jquery.magnific-popup.min.js', srcType: 'text/javascript', loaded: false },
  { name: 'bs-datepicker', src: 'assets/js/bootstrap-datepicker.js', srcType: 'text/javascript', loaded: false },
  { name: 'javascript', src: 'assets/js/app.js', srcType: 'text/javascript', loaded: false },
  { name: 'custom', src: 'assets/js/custom.js', srcType: 'text/javascript', loaded: false },
];
