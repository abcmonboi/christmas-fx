export type ChristmasFxOptions = {
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

export type ResolvedOptions = Required<
  Pick<
    ChristmasFxOptions,
    | "startDate"
    | "endDate"
    | "storageKey"
    | "showWelcome"
    | "snow"
    | "corners"
    | "hats"
    | "zIndex"
    | "welcomeTitle"
    | "welcomeSubtitle"
    | "welcomeButtonText"
  >
> & {
  enabled?: boolean;
};
