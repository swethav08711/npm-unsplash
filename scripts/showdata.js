
async function getdata(url){
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    return data.results
}
function append(d,appendmain){
    d.forEach(({cover_photo:{alt_description,urls:{small}}}) => {
    
            let div = document.createElement('div')
            let p = document.createElement('p')
            p.textContent = alt_description
            let img = document.createElement('img')
            img.src = small
            div.append(p,img)
            appendmain.append(div)
        });
}
export {getdata,append}