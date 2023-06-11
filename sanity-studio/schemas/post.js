export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{ type: 'user' }],
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image',
    },
    {
      title: 'Likes',
      name: 'likes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'user' }]
        }
      ],
      validation: (Rule) => Rule.unique()
    },
    {
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        {
          title: 'Commont',
          name: 'comment',
          type: 'document',
          fields: [
            {
              title: 'Author',
              name: 'author',
              type: 'reference',
              to: [{ type: 'user' }]
            },
            {
              title: 'Comment',
              name: 'comment',
              type: 'string',
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'comments.0.comment',
      authorName: 'author.name',
      authorEmail: 'author.email',
      media: 'photo'
    },
    prepare(selection) {
      const { title, authorName, authorEmail, media } = selection;
      return {
        title,
        subtitle: `by ${authorName} (${authorEmail})`,
        media,
      }
    }
  }
}