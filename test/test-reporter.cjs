const {Transform } = require("node:stream");

const color = (code, value)=> `\x1b[${code}m${value}\x1b[0m`;

module.exports = class Reporter extends Transform {
    constructor() {
        super({ writableObjectMode: true });
        this.passed =0;
        this.failed = 0;
        this.startedAt = Date.now();
    }
    _transform(event, encoding, callback) {
        const { type, data } = event
        if (type === "test:pass" || type === "test:fail") {
            const passed = type === "test:pass";
            const details = data.details || {};
            const error = details.error || data.error
            const message = error && error.message ? error.message : String(error || "Test failed")
            this.passed += Number(passed);
            this.failed += Number(!passed);
            this.push(
                `${data.name}: ${passed ? color(32, "Passed!!") : color(31, `failed: ${message}`)}\n` +
                `>>> ${details.duration_ms ?? 0}ms\n`
            );
        }
        callback();
    }
    _flush(callback) {
        this.push(
            "\nResult\n" +
            `> Passed: ${color(32, this.passed)}\n` +
            `> Failed: ${color(this.failed ? 31 : 32, this.failed)}\n` +
            `> Total: ${this.passed + this.failed}\n` +
            `> Time: ${Date.now() - this.startedAt}ms\n`
        )
        callback();
    }
};
