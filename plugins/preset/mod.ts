import { merge } from "lume/core/utils.ts";

import type { Page, Site } from "lume/core.ts";

export interface Options {
  /** The list of extensions this plugin applies to */
  extensions: string[];
}

// Default options
export const defaults: Options = {
  extensions: [".html"],
};

/** A plugin to <description> */
export default function (userOptions?: Partial<Options>) {
  const options = merge(defaults, userOptions);

  return (site: Site) => {
    console.log("Lume");
  };
}
