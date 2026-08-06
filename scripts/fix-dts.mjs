import { writeFileSync } from "node:fs";

const content = `type ChristmasFxOptions = {
    /** Force on/off. If omitted, season dates decide. */
    enabled?: boolean;
    /** Season start as "MM-DD". Default "12-01". */
    startDate?: string;
    /** Season end as "MM-DD". Default "01-07". */
    endDate?: string;
    /** localStorage key for welcome-once. */
    storageKey?: string;
    showWelcome?: boolean;
    snow?: boolean;
    corners?: boolean;
    hats?: boolean;
    zIndex?: number;
    welcomeTitle?: string;
    welcomeSubtitle?: string;
    welcomeButtonText?: string;
};

declare function isActive(): boolean;
declare function destroy(): void;
declare function init(options?: ChristmasFxOptions): void;

export { type ChristmasFxOptions, destroy, init, isActive };
`;

writeFileSync("dist/manual.d.ts", content);
writeFileSync("dist/manual.d.cts", content);
