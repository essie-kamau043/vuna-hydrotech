// schemas/gallery.js
// ─────────────────────────────────────────────────────────
// Drop this file into your Sanity project's /schemas folder
// Then register it in schemaTypes/index.js (see bottom)
// ─────────────────────────────────────────────────────────

export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',

  // This icon shows in the Sanity sidebar
  icon: () => '🏞️',

  fields: [
    {
      name: 'title',
      title: 'Image Title',
      type: 'string',
      description: 'e.g. "HDPE Water Pan – Kajiado County"',
      validation: Rule => Rule.required().min(3).max(80),
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true, // lets client pick focal point for cropping
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Used to filter photos in the gallery tabs on the website.',
      options: {
        list: [
          { title: 'Water Pans',  value: 'waterpan'   },
          { title: 'Excavation',  value: 'excavation' },
          { title: 'Fencing',     value: 'fencing'    },
          { title: 'Farm Use',    value: 'farm'        },
        ],
        layout: 'radio', // radio buttons are easier for a non-tech client
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location / County',
      type: 'string',
      description: 'e.g. "Kajiado County, 2025" — shown as a subtitle under the photo.',
    },
    {
      name: 'featured',
      title: 'Featured Photo?',
      type: 'boolean',
      description: 'Turn on to pin this photo to the top of the gallery.',
      initialValue: false,
    },
  ],

  // Controls the order items appear in the Sanity dashboard list
  orderings: [
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: '_createdAt', direction: 'desc' },
      ],
    },
    {
      title: 'Newest First',
      name: 'newestFirst',
      by: [{ field: '_createdAt', direction: 'desc' }],
    },
  ],

  // What the client sees in the document list (instead of a raw ID)
  preview: {
    select: {
      title:    'title',
      subtitle: 'location',
      media:    'image',
      category: 'category',
      featured: 'featured',
    },
    prepare({ title, subtitle, media, category, featured }) {
      const catLabels = {
        waterpan:   '🏞️ Water Pan',
        excavation: '🚜 Excavation',
        fencing:    '🚧 Fencing',
        farm:       '🌾 Farm',
      };
      return {
        title:    `${featured ? '⭐ ' : ''}${title}`,
        subtitle: `${catLabels[category] || category} · ${subtitle || ''}`,
        media,
      };
    },
  },
};