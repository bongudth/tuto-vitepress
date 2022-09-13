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
        ]
    },
}
