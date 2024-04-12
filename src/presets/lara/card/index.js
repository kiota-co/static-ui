export default {
    root: {
        class: [
            //Shape
            'rounded-sm',
            'shadow-sm',

            //Color
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-surface-0'
        ]
    },
    body: {
        class: 'p-4'
    },
    title: {
        class: 'text-xl font-medium mb-2'
    },
    subtitle: {
        class: [
            //Font
            'font-normal',

            //Spacing
            'mb-2',

            //Color
            'text-surface-600 dark:text-surface-0/60'
        ]
    },
    content: {
        class: 'py-4' // Vertical padding.
    },
    footer: {
        class: 'pt-4' // Top padding.
    }
};
