import bar from "./bar";

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const foo: string = "foo";

export const importFoo = () => import("node:path");

export default () => foo + bar;
