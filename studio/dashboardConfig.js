export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e8601f3b01a732a68342196',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-6z8m1szm',
                  apiId: '567bf769-9725-4dff-84cb-230111142144'
                },
                {
                  buildHookId: '5e8601f3edd8c2cee892ca97',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-zm6mm6pp',
                  apiId: 'b0afd943-adeb-43a2-9418-02706c000d5f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kaelanbelaga/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-zm6mm6pp.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
