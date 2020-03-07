/* https://github.com/zapier/intl-dateformat */
const defaultPattern = "[YMDdAaHhms]+";
const identity = x => x;
const formatters = {
  YYYY: parts => parts.year,
  YY: parts => parts.year.slice(-2),
  MMMM: parts => parts.lmonth,
  MMM: parts => parts.lmonth.slice(0, 3),
  MM: parts => parts.month,
  DD: parts => parts.day,
  dddd: parts => parts.weekday,
  ddd: parts => parts.weekday.slice(0, 3),
  A: parts => parts.dayPeriod,
  a: parts => parts.dayPeriod.toLowerCase(),
  HH: parts => parts.lhour,
  hh: parts => parts.hour,
  mm: parts => parts.minute,
  ss: parts => parts.second
};
const createCustomPattern = customFormatters =>
  Object.keys(customFormatters).reduce((pattern, key) => `|${key}`, "");
function formatDate(customFormatters, format, parts, date) {
  const customPattern = createCustomPattern(customFormatters);
  const patternRegexp = new RegExp(`${defaultPattern}${customPattern}`, "g");
  const allFormatters = Object.assign(
    Object.assign({}, formatters),
    customFormatters
  );
  return format.replace(patternRegexp, mask =>
    (allFormatters[mask] || identity)(parts, date)
  );
}

const parsers = new Map();
const intlFormattersOptions = [
  {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  },
  {
    month: "long",
    hour: "2-digit",
    hour12: false
  }
];
const createIntlFormatterWith = options =>
  intlFormattersOptions.map(
    intlFormatterOptions =>
      new Intl.DateTimeFormat(
        options.locale,
        Object.assign(Object.assign({}, intlFormatterOptions), {
          timeZone: options.timezone
        })
      )
  );
const longTokensTransformer = token =>
  token.type !== "literal"
    ? { type: `l${token.type}`, value: token.value }
    : token;
const datePartsReducer = (parts, token) => {
  parts[token.type] = token.value;
  return parts;
};
const tokenize = (intlFormatter, date) =>
  intlFormatter.formatToParts(date).filter(token => token.type !== "literal");
const normalize = parts => {
  parts.dayPeriod = parts.dayPeriod || parts.dayperiod;
  return parts;
};
const createParser = options => {
  const [intlFormatter, intlFormatterLong] = createIntlFormatterWith(options);
  return function parseDateImpl(date) {
    const tokens = tokenize(intlFormatter, date);
    const longTokens = tokenize(intlFormatterLong, date).map(
      longTokensTransformer
    );
    const allTokens = [...tokens, ...longTokens];
    const parts = allTokens.reduce(datePartsReducer, {});
    return normalize(parts);
  };
};
function parseDate(date, options = {}) {
  const key = `${options.locale}${options.timezone}`;
  let parser = parsers.get(key);
  if (!parser) {
    parser = createParser(options);
    parsers.set(key, parser);
  }
  return parser(date);
}

function createDateFormatter(customFormatters) {
  return function intlFormatDate(date, format, options) {
    const tokens = parseDate(date, options);
    const output = formatDate(customFormatters, format, tokens, date);
    return output;
  };
}

var index = createDateFormatter({});

export default index;
export { createDateFormatter };
