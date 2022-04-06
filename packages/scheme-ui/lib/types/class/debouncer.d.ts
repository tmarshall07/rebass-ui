declare class Debouncer {
    timeout: ReturnType<typeof setTimeout>;
    delay: number;
    value: any;
    constructor(initialValue?: null, delay?: number);
    getValue(): any;
    setValue(newValue: any, callback: any): void;
}
export default Debouncer;
//# sourceMappingURL=debouncer.d.ts.map