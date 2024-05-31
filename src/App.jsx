import './App.css'
import { useEffect, useState } from 'react'

import axios from 'axios'



function App() {
const [markdown,setMarkDown] = useState('# Double Enter to start Next Line');
const [html,setHtml] = useState('')


useEffect(()=>{
  const convertMarkdownHtml = async ()=>{
    try {
      const response = await axios.post('https://markdown-editor-srhu.onrender.com/api/convert',{markdown});
      setHtml(response.data.html)
   
    } catch (error) {
      console.error('Error mrkdown:',error)
    }
  };
  convertMarkdownHtml();
},[markdown])

  return (
  <div className='mainDiv'>
    <header>
      <h1>MARKDOWN EDITOR WITH LIVE PREVIEW</h1>
      </header>
      <div className='editor-box'>
       
        <textarea id='markdown-input' className='markdownInput'
        value={markdown}
        onChange={(e)=>setMarkDown(e.target.value)}
        placeholder='TYPE YOUR MARKDOWN HERE'
        />
       
<article id='article-output' dangerouslySetInnerHTML={{__html: html}}/>
            
        

      </div>
       
  </div>
  )
}

export default App
