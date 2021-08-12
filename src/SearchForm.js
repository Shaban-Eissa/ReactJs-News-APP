import React , {useState} from 'react'

const SearchForm = ({searchText}) => {
    const [text , setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        searchText(text)
    }
    return (
        <div>
            <form onSubmit= {handleSubmit}>
                <input type = 'text'
                className='py-1 px-2 rounded-l-lg outline-none'
                placeholder='e.g politics'
                onChange={(e) => setText(e.target.value)}
                >
                </input>
                <button type='submit'
                className='bg-green-400 py-1 px-2 rounded-r-lg text-white '
                >
                    Search
                </button>
            </form>
            
        </div>
    )
}

export default SearchForm
