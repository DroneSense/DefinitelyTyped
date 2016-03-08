// Type definitions for node-jspack.
// Project: https://github.com/pgriess/node-jspack
// Definitions by: Robert Shoemate <shoerob.wordpress.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface JSPack {
	Unpack(fmt: string, a: number[], p?: number): any[];
	PackTo(fmt: string, a: number[], p: number, values: any[]): number[];
	Pack(fmt: string, values: any[]): number[];
	CalcLength(fmt: string): number;
}

declare module 'jspack' {
	export var jspack: JSPack;
}
