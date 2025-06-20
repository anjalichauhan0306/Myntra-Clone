function displayPage(e) {
    const itemContainer = document.querySelector('.items_con');
let innerHTML = '';
items.forEach(item => {
    innerHTML +=  ` <div class="items">
                <img class="item-img" src="${item.item_image}"  alt="tems">
                <div class="${item.rating}">${item.rating.stars} | ${item.rating.noOfReviews}k </div>
                <div class="company-name">${item.company_name}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">Rs ${item.price.current_price}</span>
                    <span class="Original-price">Rs.${item.price.original_price}</span>
                    <span class="Discount">${item.disocoun}% Off</span>
                </div>
                <button class="btn-add-bag" onclick = 'addToBag()'>Add to Bag${item.id}</button>
            </div>`;
});
itemContainer.innerHTML = innerHTML;
}
displayPage();

var bagItem = [];
function addToBag(itemid) {
    bagItem.push(itemid);
}