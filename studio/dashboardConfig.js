export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dd41cabcc266bb83347ccf6',
                  title: 'Sanity Studio',
                  name: 'coggeshallutd-studio',
                  apiId: '146d4a34-ff22-48f6-a68a-6aa1dec94da3'
                },
                {
                  buildHookId: '5dd41cab1b40ffb533afe776',
                  title: 'Blog Website',
                  name: 'coggeshallutd',
                  apiId: '3d0cec4d-0fab-4c3a-b146-c875ed94b5c1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GDavies11/coggeshallutd',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://coggeshallutd.netlify.com', category: 'apps'}
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
