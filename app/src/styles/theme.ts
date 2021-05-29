const theme = {
    colors: {
        blue: '#1b2755',
        black: {
            1: '#121212',
            2: '#000105',
            3: '#36373c'
        },
        green: '#38d6ba',
        white: '#ffffff',
        gray: {
            1: '#fafafa',
            2: '#f8f9fb',
            3: '#eceff5',
            4: '#b7c2d7',
            5: '#aeb9d1'
        }
    },
    mixins: {
        fillContainer: 'width: 100%; height: 100%',
        postRounded: 'border-radius: 1rem'
    },
    sizes: {
        xs: '320px',
        sm: '425px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
    }
}

export default theme
