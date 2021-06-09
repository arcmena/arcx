const theme = {
    colors: {
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
        },
        pink: '#ff9e9e',
        purple: '#ac9eff',
        orange: '#ffc19e',
        blue: {
            1: '#92c9fb',
            2: '#1b2755'
        }
    },
    mixins: {
        fillContainer: 'width: 100%; height: 100%',
        postRounded: 'border-radius: 1rem',
        sectionShadow:
            'border-radius: 1.7rem; box-shadow: 0px 0px 44px -26px rgba(0, 1, 5, 0.36); background-color: #ffffff;'
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
