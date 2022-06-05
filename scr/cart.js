function newBookInCart(name,price,length){
    let item = document.createElement('div')
    let card_item_obj = filtrArrayForFindBook()
    item.setAttribute('class', 'item position-relative')
    item.innerHTML = '<table>'+
    '<tr>'+
        '<td><div class="name tb">'+name+'</div></td>'+
        '<td><div class="length tb"><span class="sht">'+length+'</span> шт.</div></td>'+
        '<td><div id="pr-cart" class="price-book_text tb">'+price+'</div></td>'+
        '<td><div class="del tb">'+
            '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>'+
        '</div></td>'+
    '</tr>'+
'</table>'
    return item
}