import sanitizeHtml from 'sanitize-html';
import type { IOptions } from 'sanitize-html';

export const sanitize = (dirty: string) => {
  const defaultOptions: IOptions = {
    allowedTags: [
      'b',
      'span'
    ],
    allowedAttributes: {
      'b': ['class'],
      'span': ['class'],
    },
    disallowedTagsMode: 'discard',
    enforceHtmlBoundary: false,
    parseStyleAttributes: true
  }

  const clean = sanitizeHtml(dirty, defaultOptions);

  return clean;
}