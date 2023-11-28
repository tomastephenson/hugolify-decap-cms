import { isNotIndex } from '../fields/is-not-index.js';
import { draft } from '../fields/draft.js';
import { title } from '../fields/title.js';
import { description } from '../fields/description.js';
import { featured_image } from '../fields/featured-image.js';
import { address } from '../fields/address.js';
import { contact } from '../fields/contact.js';
import { body } from '../fields/body.js';
import { blocks } from '../blocks/blocks.js';
import { t } from '../i18n/translater.js';

const places = {
  name: 'places',
  folder: 'content/places',
  label: t.content.places.label,
  label_singular: t.content.places.label_singular,
  description: t.content.places.description,

  create: true,
  editor: { preview: false },
  i18n: true,

  nested: { depth: 2 },
  filter: { field: 'isIndex', value: false },

  slug: '{{slug}}',
  sortable_fields: ['title'],
  summary: '{{title}}',

  fields: [
    isNotIndex,
    draft,
    title,
    description,
    address,
    contact,
    featured_image,
    body,
    blocks
  ]
};

export default places;
