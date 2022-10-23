export {};

declare global {
  interface Window {
    __RUNTIME_CONFIG__: {
        REACT_LOAD_NEPAL_API: string;
    };
  }
}
