export default function selectionFilter({ series, films }) {
    return {
        series: [
            { title: 'Documental', data: series.filter(
                (item) => item.genre === 'documental'),
            },
            { title: 'Comedia', data: series.filter(
                (item) => item.genre === 'comedia'),
            },
            { title: 'Infantil', data: series.filter(
                (item) => item.genre === 'infantil'),
            },
            { title: 'Crime', data: series.filter(
                (item) => item.genre === 'crime'),
            },
            { title: 'Feel-good', data: series.filter(
                (item) => item.genre === 'feel-good'),
            },

        ], films: [
            {
                title: 'Drama',
                data: films.filter((item) => item.genre === 'drama'),
            },
            {
                title: 'Thriller',
                data: films.filter((item) => item.genre === 'thriller'),
            },
            {
                title: 'Infantil',
                data: films.filter((item) => item.genre === 'infantil'),
            },
            {
                title: 'Suspense',
                data: films.filter((item) => item.genre === 'suspense'),
            },
            {
                title: 'Romance',
                data: films.filter((item) => item.genre === 'romance'),
            }
        ]
    };
}