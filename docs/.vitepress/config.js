export default {
    title: 'VitePress',
    description: 'Just playing around.',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        siteTitle: 'My Custom Title',
        logo: '/assets/logo.svg',
        nav: [
            { text: 'Guide', link: '/guide' },
            {
                text: 'Dropdown Menu',
                items: [
                    {
                        text: 'Section A Title',
                        items: [
                            { text: 'Section A Item A', link: '...' },
                            { text: 'Section B Item B', link: '...' }
                        ]
                    }
                ]
            },
            {
                text: 'Dropdown Menu',
                items: [
                    {
                        items: [
                            { text: 'Section A Item A', link: '...' },
                            { text: 'Section B Item B', link: '...' }
                        ]
                    }
                ]
            }
        ],
        sidebar: {
            '/foo/': [
                {
                    text: 'Home',
                    items: [
                        { text: 'Introduction', link: '/' },
                    ]
                },
                {
                    text: 'Foo',
                    items: [
                        { text: 'Index', link: '/foo/' },
                        { text: 'One', link: '/foo/one' },
                        { text: 'Two', link: '/foo/two' }
                    ]
                }
            ],
            '/bar/': [
                {
                    text: 'Bar',
                    items: [
                        { text: 'Index', link: '/bar/' },
                        { text: 'Three', link: '/bar/three' },
                        { text: 'Four', link: '/bar/four' }
                    ]
                }
            ],
            '/': [
                {
                    text: 'Foo',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: 'Index', link: '/foo/' },
                        { text: 'One', link: '/foo/one' },
                        { text: 'Two', link: '/foo/two' }
                    ]
                },
                {
                    text: 'Bar',
                    items: [
                        { text: 'Index', link: '/bar/' },
                        { text: 'Three', link: '/bar/three' },
                        { text: 'Four', link: '/bar/four' }
                    ]
                }
            ]
        }
    },
    footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2019-present Evan You'
    }
}
