const init = () => {
    const inputForm = document.querySelector('form');
    
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const input = document.querySelector('input#serchByID')


        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4')
            const summary = document.querySelector('section#movieDetails p')

            title.innertText = data.title
            summary.innertText = data.summary
        })
    
    }) 
}

document.addEventListener('DOMContentLoaded', init)

