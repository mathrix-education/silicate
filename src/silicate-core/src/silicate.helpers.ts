export type DebugLevel = 'debug' | 'info' | 'notice' | 'warning' | 'error' | 'critical' | 'alert' | 'emergency';

export class SilicateHelpers {
  mode: DebugLevel = 'debug';

  static debug(message) {
    console.log(message);
  }

  /**
   * @link https://stackoverflow.com/a/31259386/3728261
   */
  static strip(input: string, allowed: string) {
    allowed = (((allowed || '') + '')
      .toLowerCase()
      .match(/<[a-z][a-z0-9]*>/g) || [])
      .join('');

    const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    const commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

    return input.replace(commentsAndPhpTags, '')
      .replace(tags, ($0, $1) => allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '');
  }
}
