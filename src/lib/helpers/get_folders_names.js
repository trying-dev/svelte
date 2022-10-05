import { readdirSync } from 'fs';

export const get_folders_names = (/** @type {import("fs").PathLike} */ url) => readdirSync(url).filter((route) => route.indexOf('.') === -1);