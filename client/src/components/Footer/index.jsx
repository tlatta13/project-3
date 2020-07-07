import React from 'react'

const Footer =()=>{
 return(
    <div className="bg-dark text-center border-info "
    style={{"border-width": 3}}>
        <span className="text-white-50">&copy;2020 QuizStack</span>
        <p className="text-muted">
            <a className="ghlink" href="https://github.com/cag-martinez" target="_blank"  rel="noopener noreferrer">Christian Gomez Martinez</a> |
            <a className="ghlink" href="https://github.com/Savage1005" target="_blank"  rel="noopener noreferrer">Tom Savage</a> |
            <a className="ghlink" href="https://github.com/cglennon924" target="_blank"  rel="noopener noreferrer">Christopher Glennon</a> |
            <a className="ghlink" href="https://github.com/brushing1215" target="_blank"  rel="noopener noreferrer">Brett Rushing</a> |
            <a className="ghlink" href="https://github.com/tlatta13" target="_blank"  rel="noopener noreferrer">Travis Latta</a>
        </p>
</div>
 )   
}

export default Footer